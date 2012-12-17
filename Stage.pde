class Stage {
  Transfer currentTransfer = null;
  Stage() {
  }
  
  Transfer getCurrentTransfer() {
    return currentTransfer;
  }
  
  void setCurrentTransfer(Transfer transfer) {
    currentTransfer = transfer;
  }
}
