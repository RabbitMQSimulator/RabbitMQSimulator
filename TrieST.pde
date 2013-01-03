class TNode {
  int length = 0;
  ArrayList val;
  HashMap next;
  
  TNode(int r) {
    next = new HashMap();
  }
  
  int length() {
    return length;
  }
  
  void setLength(int l) {
    if (l > length) {
      length = l;
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
    String[] words = split(bindingKey);
    root = put(root, words, val, 0);
  }
  
  /**
   * Internal put helper
   */
  TNode put(TNode x, String[] words, Value val, int d) {
    if (x == null) x = new TNode();
    
    if (d == words.length) {
      if (x.val == null) {
        size++;
        x.val = new ArrayList();
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
    // we accumulate the results in q
    ArrayList q = new ArrayList();
    // TODO pre must be split by '.' beofre passing it here, so it will be an array not a String
    String[] prefix = split(pre, ".");
    collect(getTNode(root, prefix, 0), prefix, q);
    return q;
  }
  
  void collect(TNode x, String[] pre, ArrayList q) {
    if (x == null) return;
    if (x.val != null) {
        q.add(join(pre, "."));
    }
    
    Iterator i = x.next.entrySet().iterator();
    while (i.hasNext()) {
      Map.Entry me = (Map.Entry)i.next();
      String currKey = me.getKey();
      collect(x.next.get(currKey), (String[]) append(pre, currKey), q);
    }
  }
  
  ArrayList keysThatMatch(String pat) {
    ArrayList q = new ArrayList();
    String[] prefix = split("", ".");
    String[] pattern = split(pat, ".");
    collectWithPattern(root, prefix, pattern, q);
    return q;
  }
  
  void valuesWithPrefix(TNode x, String[] pre, ArrayList q) {
    // TODO works like collect but pushes the actual value in the key not the keys;
  }
  
  void collectWithHash(TNode x, String[] pre, String[] pat, int remainPattern, int remainMatch, ArrayList q) {
    if (x.length >= remainMatch) {
      Iterator i = x.next.entrySet().iterator();
      while (i.hasNext()) {
        Map.Entry me = (Map.Entry)i.next();
        String currKey = me.getKey();
        collectWithHash(x.next.get(currKey), pre, pat, remainPattern, remainMatch, q);
      }
    } else {
      collectWithPattern(x, pre, pat, remainPattern, remainMatch, q); 
    }
  }
  
  // remainPattern starts as pat.length
  // remainMatch starts as pat.length
  void collectWithPattern(TNode x, String[] pre, String[] pat, int remainPattern, int remainMatch, boolean withHash, ArrayList q) {
    // int d = pre.length;
    if (x == null) return;
    
    if (remainPattern == 0) {
      // add value to q
      return;
    }
    
    String[] rest = subset(pat, pat.length - remainPattern + 1);
    
    if (!patterHasHash(rest) && pat.length > x.length) {
      return null;
    }
    
    // TODO make sure we don't overflow the array
    int currWord = pat.length - remainPattern;
    String word = pat[currWord];
    
    if (remainPattern == 1) {
      if (word == "*") {
        // collect all the values of this node childrens without comparing keys.
        Iterator i = x.next.entrySet().iterator();
        while (i.hasNext()) {
          Map.Entry me = (Map.Entry)i.next();
          String currKey = me.getKey();
          collectWithPattern(x.next.get(currKey), pre, pat, remainPattern-1, remainMatch-1, q);
        }
      } else if (word = "#") {
        // collect all the values of this node childrens without comparing keys and possible decendants.
        // String[] prefix; // TODO array 
        // valuesWithPrefix(getTNode(root, prefix, 0), prefix, q);
      } else {
        // collect the value of the first decendant of this node comparing keys.
        // and return from the function.
        collectWithPattern(x.next.get(word), pre, pat, remainPattern-1, remainMatch-1, q);
      }
    } else {
      if (word == "*") {
        // collect all the values of this node childrens without comparing keys.
        Iterator i = x.next.entrySet().iterator();
        while (i.hasNext()) {
          Map.Entry me = (Map.Entry)i.next();
          String currKey = me.getKey();
          collectWithPattern(x.next.get(currKey), pre, pat, remainPattern-1, remainMatch-1, q);
        }
      } else if (word == "#") {
        // collect all the values of this node childrens without comparing keys.
        collectWithHash(x, pre, pat, remainPattern-1, remainMatch-1, q);
      } else {
        collectWithPattern(x.next.get(word), pre, pat, remainPattern-1, remainMatch-1, q);
      }
    }
  }
  
  boolean patterHasHash(String[] pat) {
    for (int i = 0 ; i < pat.length ; i++) {
      if (pat == "#") {
        return true;
      }
    }
    return false;
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
