using System.Web.Mvc;

namespace GitHubUserInfo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "GitHub User Information";

            return View();
        }

    }
}
