using System.Web.Mvc;
using GitHubUserInfo.Controllers;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace GitHubUserInfo.Tests.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        public void Index()
        {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            ViewResult result = controller.Index() as ViewResult;

            // Assert
            if (result != null)
                Assert.AreEqual("GitHub User Information", result.ViewBag.Message);
        }

    
    }
}
