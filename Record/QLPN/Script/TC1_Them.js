﻿
function Commom_Test(){ 
  Them_TC();
  Them_ThatBai();
}


// Kịch bản test 1: Thêm thành công sản phẩm
function Them_TC()
{
  var dataTable = [
      [25, "Phiếu nhập bia", "Thực Phẩm Nam Hà Nội"],
      [26, "Phiếu nhập hải sản ", "Thực Phẩm Trung Hiếu"],
     
  ];
     for (var i = 0; i < dataTable.length; i++) {
      var mapn = dataTable[i][0];
      var tenpn = dataTable[i][1];
      var tencc = dataTable[i][2];
  //Clicks the 'btn_taomoi' object.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_taomoi.Click(73, 24);
  // check ngay:
   var currentDate = new Date();
   var day = ("0" + currentDate.getDate()).slice(-2);
   var month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
   var year = currentDate.getFullYear();
   
   var formattedDate = day + "/" + month + "/" + year;

   Log.Message("Ngày hiện tại theo kiểu dd/MM/yyyy: " + formattedDate);
   aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_ngayNhap, "Text", cmpEqual, formattedDate);
      // kiem tra nhanvien
     var getennv = aqObject.GetPropertyValue(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNV, "wText");
     aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.guna2GradientPanel5.guna2GradientPanel4.lbl_tenNV, "Text", cmpEqual, getennv);
   //

   
  
  
  
    //Checks whether the 'Enabled' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_maPN.Owner object equals True.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_maPN.Owner, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner object equals True.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNCC object equals True.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNCC, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_them object equals True.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_them, "Enabled", cmpEqual, true);
  
  
  //Enters the text '25' in the 'Owner' text editor.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_maPN.Owner.SetText(mapn);
  //Clicks the 'panel2' object.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.Click(209, 168);
  //Clicks the 'Owner' object.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner.Click(50, 10);
  //Enters the text 'Phiếu nhập bia' in the 'Owner' text editor.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner.SetText(tenpn);
  //Selects the 'Thực Phẩm Nam Hà Nội' item of the 'cbo_maNCC' combo box.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNCC.ClickItem(tencc);
  //Clicks the 'btn_them' object.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_them.Click(42, 35);
  //Clicks the 'btnYes' button.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlgCh_.btnYes.ClickButton();
  //Checks whether the 'WndCaption' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static object equals 'Thêm thành công'.  
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static, "WndCaption", cmpEqual, "Thêm thành công");
  //Clicks the 'btnOK' button.
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.btnOK.ClickButton();
  
  // ---------------------------kiem tra co du lieu moi them co trong table
  var targetValue= mapn;
  var flag=0;
  var dgv_phieuNhap = Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel1.dgv_phieuNhap;
  //dgv_phieuNhap.Columns[0].wText;
  for (var rowIndex = 0; rowIndex < dgv_phieuNhap.RowCount-1; rowIndex++)
  {
      var cellValue = dgv_phieuNhap.wValue(rowIndex,0);                
      if(cellValue == mapn)
      {       
          flag=1;
         // Log.Message("Flag"+flag);
       
          Log.Message("Đã có 1 phiếu nhập mới")                 
          break; 
      }  
      
  }
    if(flag == 0){
       Log.Error("Không tồn tại phiếu nhập này")         
    }
    //Kiem tra vi tri phieu nhap
     var newRow = dgv_phieuNhap.wValue(0,0); 
     if(newRow != targetValue ) 
     {
       Log.Error("Vị trí phiếu nhập mới không đúng") 
     }
   

   }  
}
// Kich ban 2: them du lieu that bai      
function Them_ThatBai()
{  
  var dataTable = [
      [10, "Phiếu nhập nước ngọt", "Thực Phẩm Long Trọng Tiến "],
      [28, "Phiếu nhập nông sản", null],
      [29, "3+2*8/]{", "Thực phẩm Trung Hiếu"],
      [30, null, "Thực phẩm Trung Hiếu"],
      [null, "Phiếu nhập nông sản", null],
      [null, null, null]
  ];

// Lặp qua từng hàng trong bảng dữ liệu và tạo thể hiện PhieuNhap
  for (var i = 0; i < dataTable.length; i++) {
      var mapn = dataTable[i][0];
      var tenpn = dataTable[i][1];
      var tencc = dataTable[i][2];
      
    //Clicks the 'btn_taomoi' object.

    
  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_taomoi.Click(73, 24);
  
      
    // check ngay:
   var currentDate = new Date();
   var day = ("0" + currentDate.getDate()).slice(-2);
   var month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
   var year = currentDate.getFullYear();
   
   var formattedDate = day + "/" + month + "/" + year;

   Log.Message("Ngày hiện tại theo kiểu dd/MM/yyyy: " + formattedDate);
   aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_ngayNhap, "Text", cmpEqual, formattedDate);
    
   
   // kiem tra nhanvien
     var getennv = aqObject.GetPropertyValue(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNV, "wText");
     aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.guna2GradientPanel5.guna2GradientPanel4.lbl_tenNV, "Text", cmpEqual, getennv);
   //

  
  
  //Checks whether the 'Enabled' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_maPN.Owner object equals True.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_maPN.Owner, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner object equals True.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNCC object equals True.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNCC, "Enabled", cmpEqual, true);
  //Checks whether the 'Enabled' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_them object equals True.
  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_them, "Enabled", cmpEqual, true);
    
    //Enters the text '25' in the 'Owner' text editor.
    if(mapn!=null)
    {
      Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_maPN.Owner.SetText(mapn);
    }
    //Clicks the 'panel2' object.
    Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.Click(209, 168);
    //Clicks the 'Owner' object.
    Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner.Click(50, 10);
    //Enters the text 'Phiếu nhập bia' in the 'Owner' text editor.
    if(tenpn!=null){
        Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner.SetText(tenpn);
    }
      //Selects the 'Thực Phẩm Nam Hà Nội' item of the 'cbo_maNCC' combo box.
    if(tencc !=null){
        Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNCC.ClickItem(tencc);
    }
    //Clicks the 'btn_them' object.
    Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_them.Click(42, 35);
    //Clicks the 'btnYes' button.
    Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlgCh_.btnYes.ClickButton();
    //Checks whether the 'WndCaption' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static2 object equals 'Thêm thất bại'.
    aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static2, "WndCaption", cmpEqual, "Thêm thất bại");
    //Clicks the 'btnOK' button.
    Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.btnOK.ClickButton();
    
    // Kiem tra vi tri phieu nhap
    
  }
//{    //data 1:10-	Phiếu nhập nước ngọt	Thực phẩm Long Trọng Tiến	
//
//  //Clicks the 'btn_taomoi' object.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_taomoi.Click(35, 16);
//  //Enters the text '10' in the 'Owner' text editor.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_maPN.Owner.SetText("10");
//  //Clicks the 'Owner' object.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner.Click(53, 13);
//  //Enters the text 'Phiếu nhập nước ngọt' in the 'Owner' text editor.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner.SetText("Phiếu nhập nước ngọt");
//  //Selects the 'Thực Phẩm Long Trọng Tiến ' item of the 'cbo_maNCC' combo box.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNCC.ClickItem("Thực Phẩm Long Trọng Tiến ");
//  //Clicks the 'btn_them' object.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_them.Click(53, 29);
//  //Clicks the 'btnYes' button.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlgCh_.btnYes.ClickButton();
//  //Checks whether the 'WndCaption' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static2 object equals 'Thêm thất bại'.
//  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static2, "WndCaption", cmpEqual, "Thêm thất bại");
//  //Clicks the 'btnOK' button.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.btnOK.ClickButton();
//  
//     // 2 28	Phiếu nhập nông sản	null	
//   //Clicks the 'btn_taomoi' object.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_taomoi.Click(35, 16);
//  //Enters the text '28' in the 'Owner' text editor.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_maPN.Owner.SetText("28");
//  //Clicks the 'Owner' object.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner.Click(53, 13);
//  //Enters the text 'Phiếu nhập nông sản' in the 'Owner' text editor.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner.SetText("Phiếu nhập nông sản");
//  //Selects the 'null ' item of the 'cbo_maNCC' combo box.  
//  //Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNCC.ClickItem("Thực Phẩm Trung Hiếu");
//  //Clicks the 'btn_them' object.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_them.Click(53, 29);
//  //Clicks the 'btnYes' button.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlgCh_.btnYes.ClickButton();
//  //Checks whether the 'WndCaption' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static2 object equals 'Thêm thất bại'.
//  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static2, "WndCaption", cmpEqual, "Thêm thất bại");
//  //Clicks the 'btnOK' button.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.btnOK.ClickButton();
//  
//  
//  // 3	29	3+2*8/]{	Thực phẩm Trung Hiếu	
//
//  //Clicks the 'btn_taomoi' object.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_taomoi.Click(35, 16);
//  //Enters the text '28' in the 'Owner' text editor.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_maPN.Owner.SetText("29");
//  //Clicks the 'Owner' object.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner.Click(53, 13);
//  //Enters the text '3+2*8/]{' in the 'Owner' text editor.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner.SetText("3+2*8/]{");
//  //Selects the 'Thực Phẩm Long Trọng Tiến ' item of the 'cbo_maNCC' combo box.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNCC.ClickItem("Thực Phẩm Trung Hiếu");
//  //Clicks the 'btn_them' object.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_them.Click(53, 29);
//  //Clicks the 'btnYes' button.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlgCh_.btnYes.ClickButton();
//  //Checks whether the 'WndCaption' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static2 object equals 'Thêm thất bại'.
//  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static2, "WndCaption", cmpEqual, "Thêm thất bại");
//  //Clicks the 'btnOK' button.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.btnOK.ClickButton();
//  
//  
//
//  
//  
//
//  
//     // 4  30	null	Thực phẩm Trung Hiếu	
//   //Clicks the 'btn_taomoi' object.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_taomoi.Click(35, 16);
//  //Enters the text '30' in the 'Owner' text editor.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_maPN.Owner.SetText("30");
//  //Clicks the 'Owner' object.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner.Click(53, 13);
//  //Enters the text 'Phiếu nhập nông sản' in the 'Owner' text editor.
//  // Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner.SetText("Phiếu nhập nông sản");
//  //Selects the 'null ' item of the 'cbo_maNCC' combo box.  
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNCC.ClickItem("Thực Phẩm Trung Hiếu");
//  //Clicks the 'btn_them' object.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_them.Click(53, 29);
//  //Clicks the 'btnYes' button.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlgCh_.btnYes.ClickButton();
//  //Checks whether the 'WndCaption' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static2 object equals 'Thêm thất bại'.
//  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static2, "WndCaption", cmpEqual, "Thêm thất bại");
//  //Clicks the 'btnOK' button.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.btnOK.ClickButton();
//  
//  
//  //5	null	Phiếu nhập 30	null	
//
//    Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_taomoi.Click(35, 16);
//  //Enters the text 'null' in the 'Owner' text editor.
//  //Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_maPN.Owner.SetText("30");
//  //Clicks the 'Owner' object.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner.Click(53, 13);
//  //Enters the text 'Phiếu nhập nông sản' in the 'Owner' text editor.
//   Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner.SetText("Phiếu nhập nông sản");
//  //Selects the 'null ' item of the 'cbo_maNCC' combo box.  
//  //Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNCC.ClickItem("Thực Phẩm Trung Hiếu");
//  //Clicks the 'btn_them' object.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_them.Click(53, 29);
//  //Clicks the 'btnYes' button.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlgCh_.btnYes.ClickButton();
//  //Checks whether the 'WndCaption' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static2 object equals 'Thêm thất bại'.
//  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static2, "WndCaption", cmpEqual, "Thêm thất bại");
//  //Clicks the 'btnOK' button.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.btnOK.ClickButton();
//   
//  
//  //6	null	null	null	
//  
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_taomoi.Click(35, 16);
//  //Enters the text 'null' in the 'Owner' text editor.
//  //Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_maPN.Owner.SetText("30");
//  //Clicks the 'Owner' object.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner.Click(53, 13);
//  //Enters the text 'Phiếu nhập nông sản' in the 'Owner' text editor.
//   //Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.txt_tenPN.Owner.SetText("Phiếu nhập nông sản");
//  //Selects the 'null ' item of the 'cbo_maNCC' combo box.  
//  //Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.cbo_maNCC.ClickItem("Thực Phẩm Trung Hiếu");
//  //Clicks the 'btn_them' object.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.Home.tableLayoutPanel1.tableLayoutPanel2.tableLayoutPanel3.tableLayoutPanel4.tableLayoutPanel5.tableLayoutPanel6.panel_hienThi.QuanLy.tableLayoutPanel1.pannel_hienThi.PhieuNhapThucPham.tableLayoutPanel1.panel2.btn_them.Click(53, 29);
//  //Clicks the 'btnYes' button.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlgCh_.btnYes.ClickButton();
//  //Checks whether the 'WndCaption' property of the Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static2 object equals 'Thêm thất bại'.
//  aqObject.CheckProperty(Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.Static2, "WndCaption", cmpEqual, "Thêm thất bại");
//  //Clicks the 'btnOK' button.
//  Aliases.DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.dlg.btnOK.ClickButton();
}

