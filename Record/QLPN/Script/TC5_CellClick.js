﻿function Test_CellClick()
{
  //var targetValue=mapn;
    var dgv_phieuNhap = Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel1.dgv_phieuNhap;
  //var cot1 = dgv_phieuNhap.Find("Mã PN");    
  //  Log.Message(columnName);
  
  for (var rowIndex = 0; rowIndex < 5; rowIndex++)
  {
            
          dgv_phieuNhap.ClickCell(rowIndex,0);
          var tmp_mapn = dgv_phieuNhap.wValue(rowIndex,0);
          var tmp_ngaynhap = dgv_phieuNhap.wValue(rowIndex,1);
          var tmp_tenpn = dgv_phieuNhap.wValue(rowIndex,2);
          var tmp_tennv=dgv_phieuNhap.wValue(rowIndex,3);
          var tenncc=dgv_phieuNhap.wValue(rowIndex,4); 
          
          
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_maPN, "Text", cmpEqual, tmp_mapn);
  //Checks whether the 'wText' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner object equals 'Phiếu nhập nước ngọt'.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner, "wText", cmpEqual, tmp_tenpn);
  //Checks whether the 'Text' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_ngayNhap object equals '11/06/2013'.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_ngayNhap, "Text", cmpEqual,tmp_ngaynhap);
  //Checks whether the 'wText' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNV object equals 'Nguyễn Quốc Bảo'.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNV, "wText", cmpEqual, tmp_tennv);
  //Checks whether the 'wText' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNCC object equals 'Thực Phẩm Trung Hiếu'.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNCC, "wText", cmpEqual, tenncc);
          
      
  }

  //Clicks the 'dgv_phieuNhap' grid cell at row 5, column 'Mã PN'.



}