using DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.BSLayer;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace UnitTest_PhieuNhapHang
{
    [TestClass]
    public class UnitTest_Sua
    {
        [TestMethod]
        public void TC_1()
        {
            BSPhieuNhapTP pn = new BSPhieuNhapTP();
            string maPN = "18";
            string ngayNhapStr = DateTime.Now.ToString("dd/MM/yyyy");
            string tenPN = "Phiếu nhập ngày " + ngayNhapStr;   
            string maNCC = "NCC001";
            bool kt = pn.SuaPN(maPN, tenPN, maNCC);
            if (kt == false)
            {
                Assert.AreEqual(1, 2);
            }
            else
            {
                Assert.AreEqual(1, 1);
            }
        }
        //[TestMethod]
        //public void TC_2()
        //{
        //    BSPhieuNhapTP pn = new BSPhieuNhapTP();
        //    string maPN = "19";
        //    string ngayNhapStr = DateTime.Now.ToString("dd/MM/yyyy");
        //    string tenPN = "Phiếu nhập ngày " + ngayNhapStr;
        //    //  string maNCC = "NCC001";
        //    string maNCC = "NCC-22/";
        //    bool kt = pn.SuaPN(maPN, tenPN, maNCC);
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
