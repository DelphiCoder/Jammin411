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

        public IActionResult Tabulator()
        {
            return View();
        } //end Tabulator
    } //end class
} //end namespace