class TNode {
  int length = 0;
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
}

class TrieST<Value> {
  TNode root;
  int size = 0;
  int itemCount = 0;
  
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
    
    if (d == words.length) {
      if (x.val == null) {
        x.val = new ArrayList();
        size++;
      }
      
      if (!x.val.contains(val)) {
        x.val.add(val);
        itemCount++;
      }
       
      return x;
    }
    
    String word = words[d];
    x.next.put(word, put(x.next.get(word), words, val, d+1));
    
    x.setLength(words.length - d);
    return x;
  } 
  
  int size() {
    return size;
  }
  
  int itemCount() {
    return itemCount;
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
  
  ArrayList keysThatMatch(String pat) {
    ArrayList acc = new ArrayList();
    String[] pattern = split(pat, ".");
    collectWithPattern(root, pattern, pattern.length, acc);
    return acc;
  }
  
  void collectWithPattern(TNode x, String[] pat, int remainPattern, ArrayList acc) {
    if (x == null) return;
    
    String word = pat[pat.length - remainPattern];

    if (remainPattern == 0) {
      if(x.val != null) {
        acc.addAll(x.val);
      }
      return;
    } else if (remainPattern == 1) {
      if (word == "*") {
        // collect all the values of this node children without comparing keys.
        Iterator i = x.next.entrySet().iterator();
        while (i.hasNext()) {
          Map.Entry me = (Map.Entry)i.next();
          String currKey = me.getKey();
          collectWithPattern(x.next.get(currKey), pat, remainPattern-1, acc);
        }
      } else if (word == "#") { 
        allChildValues(x, acc);
      } else {
        // collect the value of the first decendant of this node comparing keys.
        collectWithPattern(x.next.get(word), pat, remainPattern-1, acc);
      }
    } else {
      if (word == "*") {
        // collect all the values of this node childrens without comparing keys.
        Iterator i = x.next.entrySet().iterator();
        while (i.hasNext()) {
          Map.Entry me = (Map.Entry)i.next();
          String currKey = me.getKey();
          collectWithPattern(x.next.get(currKey), pat, remainPattern-1, acc);
        }
      } else if (word == "#") {
        // collect all the values of this node childrens without comparing keys.
        collectWithHash(x, pat, remainPattern-1, acc);
      } else {
        collectWithPattern(x.next.get(word), pat, remainPattern-1, acc);
      }
    }
  }
  
  void collectWithHash(TNode x, String[] pat, int remainPattern, ArrayList acc) {
    if (x.getLength() > remainPattern) {
      Iterator i = x.next.entrySet().iterator();
      while (i.hasNext()) {
        Map.Entry me = (Map.Entry)i.next();
        String currKey = me.getKey();
        collectWithHash(x.next.get(currKey), pat, remainPattern, acc);
      }
    } else {
      collectWithPattern(x, pat, remainPattern, acc); 
    }
  }
  
  void allChildValues(TNode x, ArrayList acc) {
    if (x == null) return;
    if (x.val != null) {
        acc.addAll(x.val);
    }
    
    Iterator i = x.next.entrySet().iterator();
    while (i.hasNext()) {
      Map.Entry me = (Map.Entry)i.next();
      String currKey = me.getKey();
      allChildValues(x.next.get(currKey), acc);
    }
  }
  
  void delete(String aKey, Value val) {
    root = delete(root, aKey, val, 0); 
  }
  
  TNode delete(TNode x, String aKey, Value val, int d) {
    if (x == null) return null;
    if (d == aKey.size()) {
      // Removes the destination from the ArrayList
      x.val.remove(val);
      
      // if the ArrayList is empty then we reset it to null
      if (x.val.isEmpty()) {
        x.val = null;
      }
    } else {
      String word = (String) words.get(d);
      x.next.put(word, delete(x.next.get(word), aKey, val, d+1));
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
