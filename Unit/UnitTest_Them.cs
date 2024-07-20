using DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.BSLayer;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace UnitTest_PhieuNhapHang
{
    [TestClass]
    public class UnitTest_Them
    {
        [TestMethod]
        public void TC_1()  // Kiểm tra thêm thành công
        {
            BSPhieuNhapTP pn = new BSPhieuNhapTP();
            string maPN = "21";
            string ngayNhapStr = DateTime.Now.ToString("dd/MM/yyyy");
            string tenPN = "Phiếu nhập ngày " + ngayNhapStr;
            string maNV = "NV014";
            string maNCC = "NCC001";
            bool kt = pn.ThemPN(maPN, ngayNhapStr, tenPN, maNV, maNCC);
            if(kt == false)
            {
                Assert.AreEqual(1, 2);
            }
            else
            {
                Assert.AreEqual(1, 1);
            }
        }
        //[TestMethod]
        //public void TC_2()   //Kiểm tra thêm thất bại
        //{
        //    BSPhieuNhapTP pn = new BSPhieuNhapTP();
        //    string maPN = "22";
        //    string ngayNhapStr = DateTime.Now.ToString("dd/MM/yyyy");
        //    string tenPN = "Phiếu nhập ngày" + ngayNhapStr;
        //    string maNV = "NVVVVVV";
        //    string maNCC = "NCC001";
        //    bool kt = pn.ThemPN(maPN, ngayNhapStr, tenPN, maNV, maNCC);
        //    if (kt == false)
        //    {
        //        Assert.AreEqual(1, 1);
        //    }
        //    else
        //    {
        //        Assert.AreEqual(1, 2);
        //    }

        //}

    }
}
