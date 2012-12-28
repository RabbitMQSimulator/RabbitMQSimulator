class TNode {
  ArrayList val;
  HashMap next;
  
  TNode(int r) {
    next = new HashMap();
  }
}

class TrieST<Value> {
  TNode root;
  
  ArrayList getValue(String aKey) {
    // TODO see where to spit the routing key
    // and fill up the words ArrayList
    // if the string is empty then we return the root node ArrayList();
    TNode x = getTNode(root, words, 0);
    if (x == null) return null;
    return x.val;
  }
  
  TNode getTNode(TNode x, ArrayList words, int d) {
    if (x  == null) return null;
    if (d == words.size()) return x;
    String word = (String) words.get(d);
    return getTNode(x.next.get(word), words, d+1);
  }
  
  void put(String bindingKey, Value val) {
    // TODO see where to spit the routing key
    // and fill up the words ArrayList
    // if the string is empty then we add the destination to the root node.
    root = put(root, words, val, 0);
  }
  
  TNode put(TNode x, ArrayList words, Value val, int d) {
    if (x == null) x = new TNode();
    if (d == words.size()) {
      if (x.val == null) {
        x.val = new ArrayList();
      }
      
      if (!x.val.contains(val)) {
        x.val.add(val);
      }
       
      return x; 
    }
    String word = (String) words.get(d);
    x.next.put(word, put(x.next.get(word), words, val, d+1));
  }
  
  int size() {
    return size(root);
  }
  
  int size(TNode x) {
    return 0;
  }
  
  ArrayList keys() {
    return keysWithPrefix("");
  }
  
  ArrayList keysWithPrefix(String pre) {
    ArrayList q = new ArrayList();
    // TODO pre must be split by '.' beofre passing it here, so it will be an array not a String
    collect(get(root, pre, 0), pre, q);
    return q;
  }
  
  void collect(TNode x, String pre, ArrayList q) {
    if (x == null) return;
    if (x.val != null) {
        q.add(pre);
    }
    
    Iterator i = x.next.entrySet().iterator();
    while (i.hasNext()) {
      Map.Entry me = (Map.Entry)i.next();
      String currKey = me.getKey();
      collect(x.next.get(currKey), pre + "." + currKey, q);
    }
  }
  
  ArrayList keysThatMatch(String pat) {
    ArrayList q = new ArrayList();
    collectWithPattern(root, "", pat, q);
    return q;
  }
  
  void collectWithPattern(TNode z, String pre, String pat, ArrayList q) {
    int d = pre.length();
    if (x == null) return;
    if (d == pat.length() && x.val != null) q.add(pre);
    if (d == pat.length()) return;
    
    String word = (String) words.get(d);
    // TODO implement topic routing here
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
