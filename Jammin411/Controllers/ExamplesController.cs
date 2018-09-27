using Microsoft.AspNetCore.Mvc;

namespace Jammin411.Controllers
{
    public class ExamplesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        } //end index

        public IActionResult BoxShadows()
        {
            return View();
        } //end boxshadows
    } //end class
} //end namespace