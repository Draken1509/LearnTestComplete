using DAMH_Nhom05_2001203007_QuanLyQuanAn_PhanCode.BSLayer;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Text.RegularExpressions;

namespace UnitTest_PhieuNhapHang
{
    [TestClass]
    public class UnitTest_Xoa
    {
        [TestMethod]
        public void TC_1()
        {
            BSPhieuNhapTP pn = new BSPhieuNhapTP();
            string maPN = "21";
             bool kt = pn.XoaPN(maPN);
            if (kt == false)
            {
                Assert.AreEqual(1, 2);
            }
            else
            {
                Assert.AreEqual(1, 1);
            }
        }
      
    }
}
