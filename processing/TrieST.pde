class TNode {
  int length = 0;
  String nodeKey;
  ArrayList val;
  HashMap next;
  
  TNode() {
    next = new HashMap();
  }
  
  int getLength() {
    return length;
  }
  
  void setLength(int len) {
    if (len > length) {
      length = len;
    } 
  }
  
  void setNodeKey(String[] words) {
    nodeKey = join(words, ".");
  }
}

class TrieST<Value> {
  TNode root;
  int size = 0;
  int itemCnt = 0;
  
  ArrayList getValue(String aKey) {
    String[] words = split(aKey, ".");
    TNode x = getTNode(root, words, 0);
    if (x == null) return null;
    return x.val;
  }
  
  /**
   * Internal getNode helper
   */
  TNode getTNode(TNode x, String[] words, int d) {
    if (x  == null) return null;
    if (d == words.length) return x;
    String word = words[d];
    return getTNode(x.next.get(word), words, d+1);
  }
  
  TNode getParentNode(TNode x) {
    String[] keys = split(x.nodeKey, ".");
    String[] parentKey = subset(keys, 0, keys.length - 1);
    return getTNode(root, parentKey, 0);
  }
  
  /**
   * Public put method
   */
  void put(String bindingKey, Value val) {
    String[] words = split(bindingKey, ".");
    root = put(root, words, val, 0);
  }
  
  /**
   * Internal put helper
   */
  TNode put(TNode x, String[] words, Value val, int d) {
    if (x == null) x = new TNode();
    x.setLength(words.length - d);
    x.setNodeKey(subset(words, 0, d));
    
    
    if (d == words.length) {
      if (x.val == null) {
        x.val = new ArrayList();
        size++;
      }
      
      if (!x.val.contains(val)) {
        x.val.add(val);
        itemCnt++;
      }
      
      return x;
    }
    
    String word = words[d];
    x.next.put(word, put(x.next.get(word), words, val, d+1));

    return x;
  } 
  
  int size() {
    return size;
  }
  
  int itemCount() {
    return itemCnt;
  }
  
  ArrayList keys() {
    return keysWithPrefix("");
  }
  
  ArrayList keysWithPrefix(String pre) {
    ArrayList acc = new ArrayList();
    String[] prefix = split(pre, ".");
    collect(getTNode(root, prefix, 0), prefix, acc);
    return acc;
  }
  
  void collect(TNode x, String[] pre, ArrayList acc) {
    if (x == null) return;
    if (x.val != null) {
      // if we have a value we join what we have so far in pre
      acc.add(join(pre, "."));
    }
    
    Iterator i = x.next.entrySet().iterator();
    while (i.hasNext()) {
      Map.Entry me = (Map.Entry)i.next();
      String currKey = me.getKey();
      // append the currKey so we keep track of the links visited
      collect(x.next.get(currKey), (String[]) append(pre, currKey), acc);
    }
  }
  
  HashMap allValues() {
    HashMap acc = new HashMap();
    allChildValues(root, acc);
    return acc;
  }
  
  HashMap valuesForPattern(String pat) {
    HashMap acc = new HashMap();
    String[] pattern = split(pat, ".");
    collectWithPattern(root, pattern, pattern.length, acc);
    return acc;
  }
  
  void collectWithPattern(TNode x, String[] pat, int remainPattern, HashMap acc) {
    if (x == null) return;
    
    String word = pat[pat.length - remainPattern];

    if (remainPattern == 0) {
      if(x.val != null) {
        acc.put(x.nodeKey, x.val);
      }
      return;
    } else {
      if (word == "*") {
        // collect all the values of this node children without comparing keys.
        Iterator i = x.next.entrySet().iterator();
        while (i.hasNext()) {
          Map.Entry me = (Map.Entry)i.next();
          String currKey = me.getKey();
          collectWithPattern(x.next.get(currKey), pat, remainPattern-1, acc);
        }
      } else if (word == "#") {
        if (remainPattern == 1) {
          allChildValues(x, acc);
        } else {
          collectWithHash(x, pat, remainPattern-1, acc);
        }
      } else {
        // collect the value of the first decendant of this node comparing keys.
        collectWithPattern(x.next.get(word), pat, remainPattern-1, acc);
      }
    }
  }
  
  void collectWithHash(TNode x, String[] pat, int remainPattern, HashMap acc) {
    if (x == null) return; 
    
    if (x.getLength() >= remainPattern) {
      Iterator i = x.next.entrySet().iterator();
      while (i.hasNext()) {
        Map.Entry me = (Map.Entry)i.next();
        String currKey = me.getKey();
        collectWithHash(x.next.get(currKey), pat, remainPattern, acc);
      }
    } else {
      collectWithPattern(getParentNode(x), pat, remainPattern, acc);
    }
  }
  
  void allChildValues(TNode x, HashMap acc) {
    if (x == null) return;
    if (x.val != null) {
        acc.put(x.nodeKey, x.val);
    }
    
    Iterator i = x.next.entrySet().iterator();
    while (i.hasNext()) {
      Map.Entry me = (Map.Entry)i.next();
      String currKey = me.getKey();
      allChildValues(x.next.get(currKey), acc);
    }
  }
  
  HashMap valuesForRoutingKey(String rkey) {
    HashMap acc = new HashMap();
    String[] pattern = split(rkey, ".");
    collectWithRoutingKey(root, pattern, pattern.length, acc);
    return acc;
  }
  
  void collectWithRoutingKey(TNode x, String[] pat, int remainPattern, HashMap acc) {
    if (x == null) return;
    String word = pat[pat.length - remainPattern];
    if (remainPattern == 0) {
      if(x.val != null) {
        acc.put(x.nodeKey, x.val);
      }
      collectWithRoutingKeyHash(x.next.get("#"), pat, remainPattern, acc);
    } else {
      collectWithRoutingKey(x.next.get(word), pat, remainPattern-1, acc);
      collectWithRoutingKey(x.next.get("*"), pat, remainPattern-1, acc);
      collectWithRoutingKeyHash(x.next.get("#"), pat, remainPattern, acc);
    }
  }
  
  void collectWithRoutingKeyHash(TNode x, String[] pat, String remainPattern, HashMap acc) {
    for (var i = 0; i <= pat.length; i++) {
      collectWithRoutingKey(x, pat, i, acc);
    }
  }
  
  void delete(String aKey, Value val) {
    String[] words = split(aKey, ".");
    root = delete(root, words, val, 0);
  }
  
  TNode delete(TNode x, String[] words, Value val, int d) {
    if (x == null) return null;
    if (d == words.length) {
      // Removes the destination from the ArrayList
      x.val.remove(val);
      itemCnt--;
      
      // if the ArrayList is empty then we reset it to null
      if (x.val.isEmpty()) {
        x.val = null;
      }
    } else {
      String word = (String) words[d];
      x.next.put(word, delete(x.next.get(word), words, val, d+1));
    }
    
    if ( x.val != null) return x;
    
    Iterator i = x.next.entrySet().iterator();
    while (i.hasNext()) {
      Map.Entry me = (Map.Entry)i.next();
      String currKey = me.getKey();
      
      if (x.next.get(currKey) != null) {
        return x;
      }
    }
    
    return null;
  }
}
