function layngay() {
   var currentDate = new Date();
   var day = ("0" + currentDate.getDate()).slice(-2);
   var month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
   var year = currentDate.getFullYear();
   
   var formattedDate = day + "/" + month + "/" + year;

   Log.Message("Ngày hiện tại theo kiểu dd/MM/yyyy: " + formattedDate);
   
}

function Test4()
{
  //Clicks the 'DesktopWindowXamlSource' object.
  Aliases.explorer.wndShell_TrayWnd.DesktopWindowXamlSource.Click(1432, 43);
  //Clicks the 'wndTaskListThumbnailWnd' object.
  Aliases.explorer.wndTaskListThumbnailWnd.Click(405, 141);
  //Clicks the 'btn_taomoi' object.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_taomoi.Click(78, 24);
  //Clicks the 'btn_taomoi' object.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_taomoi.Click(65, 16);
  //Checks whether the 'Text' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_ngayNhap object equals '13/11/2023'.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_ngayNhap, "Text", cmpEqual, "13/11/2023");
}

function Test5()
{
  //Closes the 'dlg' window.

  //Clicks the 'btn_taomoi' object.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_taomoi.Click(58, 13);
  //Checks whether the 'Text' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.guna2GradientPanel5.guna2GradientPanel4.lbl_tenNV object equals 'Trương Thành Trung'.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.guna2GradientPanel5.guna2GradientPanel4.lbl_tenNV, "Text", cmpEqual, "Trương Thành Trung");
  //Checks whether the 'wText' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNV object equals 'Trương Thành Trung'.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNV, "wText", cmpEqual, "Trương Thành Trung");
  
  var textValue = aqObject.GetPropertyValue(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNV, "wText");

// Hiển thị giá trị trong Log
Log.Message("Giá trị của thuộc tính 'wText': " + textValue);
}