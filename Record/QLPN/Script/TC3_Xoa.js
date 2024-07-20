function Test_Xoa()
{
  
 var dataTable = [34,37];
  for (var i = 0; i < dataTable.length; i++) {
      var mapn =  dataTable[i];
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
      
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_xoa, "Enabled", cmpEqual, true);
  //Clicks the 'btn_xoa' object.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_xoa.Click(12, 23);
  //Clicks the 'btnYes' button.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlgCh_.btnYes.ClickButton();
  //Checks whether the 'WndCaption' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static4 object equals 'Đã xóa thành công '.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static4, "WndCaption", cmpEqual, "Đã xóa thành công ");
  //Clicks the 'btnOK' button.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.btnOK.ClickButton();
  
    var flag=0;
    for (var rowIndex = 0; rowIndex < dgv_phieuNhap.RowCount-1; rowIndex++)
      {
          var cellValue = dgv_phieuNhap.wValue(rowIndex,0);
          if (cellValue == targetValue)          
          {
           var flag = 1;
              Log.Error("Phiếu nhập vẫn còn trên table");
              break; // Kết thúc vòng lặp sau khi tìm thấy và click vào dòng
          }
      }
      if(flag==1)
      {
         Log.Message("Phiếu nhập 0 còn trên table");
      }
}
}