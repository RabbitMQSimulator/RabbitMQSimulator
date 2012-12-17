class Stage {
  ArrayList transfers = new ArrayList();
  
  Stage() {
  }
  
  void addTransfer(Transfer transfer) {
    transfers.add(transfer);
  }
  
  void draw() {
    for (int i = transfers.size()-1; i >= 0; i--) {
      Transfer transfer = (Transfer) transfers.get(i);
      transfer.update();
      transfer.draw();
      transfer.afterDraw();

      if (transfer.isFinished()) {
          transfers.remove(i);
      }      
    }
  }
}
