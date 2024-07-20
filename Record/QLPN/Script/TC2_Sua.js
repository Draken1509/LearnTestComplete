

function Commom_Test(){ 
  Sua_TC();
  Sua_ThatBai();
}

//Kich ban test 1 - sua thanh cong
function Sua_TC()
{
   var dataTable = [
      [10,"Phiếu nhập rau củ quả","Thực Phẩm Zin Food"],
      [11,"Phiếu nhập nước ngọt","Thực Phẩm Trung Hiếu"],      
  ];
    
  for (var i = 0; i < dataTable.length; i++) {
      var mapn =  dataTable[i][0];
      var tenpn = dataTable[i][1];
      var tencc = dataTable[i][2];
      
  //Clicks the indicator of the 1 row of the dgv_phieuNhap grid.
  //Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel1.dgv_phieuNhap.ClickRowIndicator(1);
  var targetValue = mapn;
  var dgv_phieuNhap = Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel1.dgv_phieuNhap;
  for (var rowIndex = 0; rowIndex < dgv_phieuNhap.RowCount-1; rowIndex++)
  {
      var cellValue = dgv_phieuNhap.wValue(rowIndex,0);
      if (cellValue == targetValue)
      {
         Log.Message("Đã click vào mã PN "+ cellValue);
          // Nếu điều kiện khớp, click vào dòng
          dgv_phieuNhap.ClickCell(rowIndex,0);
          //Log.Message("Đã click vào dòng có giá trị " + targetValue + " tại dòng " + (rowIndex + 1));
          break; // Kết thúc vòng lặp sau khi tìm thấy và click vào dòng
      }
  }
  
  //Checks whether the 'Enabled' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_sua object equals True.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_sua, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner object equals True.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNCC object equals True.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNCC, "Enabled", cmpEqual, true);
  //Clicks the 'Owner' object.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner.Click(158, 5);
  //Enters the text 'Phiếu nhập 10' in the 'Owner' text editor.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner.SetText(tenpn);
  //Selects the 'Thực Phẩm Zin Food' item of the 'cbo_maNCC' combo box.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNCC.ClickItem(tencc);
  //Clicks the 'btn_sua' object.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_sua.Click(43, 12);
  //Clicks the 'btnYes' button.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlgCh_.btnYes.ClickButton();
  //Checks whether the 'WndCaption' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static3 object equals 'Sửa thành công'.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static3, "WndCaption", cmpEqual, "Sửa thành công");
  //Clicks the 'btnOK' button.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.btnOK.ClickButton();
  }
}

//Kich ban test 2 - sua that bai
function Sua_ThatBai()
{
   var dataTable = [
      [10,"","Thực Phẩm Zin Food"],
      [11,"","Thực Phẩm Trung Hiếu"],      
  ];
    
  for (var i = 0; i < dataTable.length; i++) {
      var mapn =  dataTable[i][0];
      var tenpn = dataTable[i][1];
      var tencc = dataTable[i][2];
      
  //Clicks the indicator of the 1 row of the dgv_phieuNhap grid.
  //Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel1.dgv_phieuNhap.ClickRowIndicator(1);
  var targetValue=mapn;
  var dgv_phieuNhap = Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel1.dgv_phieuNhap;
  for (var rowIndex = 0; rowIndex < dgv_phieuNhap.RowCount-1; rowIndex++)
  {
      var cellValue = dgv_phieuNhap.wValue(rowIndex,0);
      if (cellValue == targetValue)
      {
           Log.Message("Đã click vào mã PN "+ cellValue);
          // Nếu điều kiện khớp, click vào dòng
          dgv_phieuNhap.ClickCell(rowIndex,0);
          //Log.Message("Đã click vào dòng có giá trị " + targetValue + " tại dòng " + (rowIndex + 1));
          break; // Kết thúc vòng lặp sau khi tìm thấy và click vào dòng
      }
  }
  
  //Checks whether the 'Enabled' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_sua object equals True.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_sua, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner object equals True.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNCC object equals True.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNCC, "Enabled", cmpEqual, true);
  //Clicks the 'Owner' object.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner.Click(158, 5);
  //Enters the text 'Phiếu nhập 10' in the 'Owner' text editor.
  if(tenpn!=null){
    Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner.SetText(tenpn);
  }
  
  //Selects the 'Thực Phẩm Zin Food' item of the 'cbo_maNCC' combo box.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNCC.ClickItem(tencc);
  //Clicks the 'btn_sua' object.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_sua.Click(43, 12);
  //Clicks the 'btnYes' button.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlgCh_.btnYes.ClickButton();
  //Checks whether the 'WndCaption' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static3 object equals 'Sửa thành công'.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static3, "WndCaption", cmpEqual, "Sửa thất bại");
  //Clicks the 'btnOK' button.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.btnOK.ClickButton();
  }
}



function Test4()
{
  var targetValue=15;
  var dgv_phieuNhap = Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel1.dgv_phieuNhap;
  for (var rowIndex = 0; rowIndex < dgv_phieuNhap.RowCount-1; rowIndex++)
  {
      var cellValue = dgv_phieuNhap.wValue(rowIndex,0);
      if (cellValue == targetValue)
      {
        Log.Message("Giá trị của cột đầu tiên của dòng đã click: " + cellValue);
          // Nếu điều kiện khớp, click vào dòng
          dgv_phieuNhap.ClickCell(rowIndex,0);
          Log.Message("Đã click vào dòng có giá trị " + targetValue + " tại dòng " + (rowIndex + 1));
          break; // Kết thúc vòng lặp sau khi tìm thấy và click vào dòng
      }
  }

}