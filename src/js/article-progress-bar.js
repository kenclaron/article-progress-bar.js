/****************************\
| Article Progress Bar       |
| version: 1.0               |
|                            |
| author: KenClaron          |
| website: kenclaron.ru      |
| mail: kenclaron@gmail.com  |
\****************************/

console.info("[article-progress-bar.js] Version - 1.0");

class ArticleProgressBar {
  /**
   * Initializes and creates a scrollbar object in a document
   * @param {String} heightActive Height of active element (default: 100%)
   * @param {String} heightContainer Height of container element (default: 4px)
   * @param {String} colorActive Color of active element (default: #f23232)
   * @param {String} colorContainer Color of container element (default: #f2f2f2)
   * @param {Boolean} mobile True: Only mobile devices | False: All devices (default: true)
   */
  constructor(heightActive = "4px", heightContainer = "4px", colorActive = "#f23232", colorContainer = "#f2f2f2", mobile = true) {
    this.settings = {
      height: {
        active: heightActive,
        container: heightContainer
      },
      color: {
        active: colorActive,
        container: colorContainer
      },
      mobile: mobile
    };
    this.Create(this.settings);
  }

  /**
   * Create scrollbar objects and append body document
   * @param {Object} settings
   * @returns {Boolean} true
   */
  Create(settings)
  {
    // Objects initialization
    let container = document.createElement("div");
    container.id = "article-progress-bar-container";
    let active = document.createElement("div");
    active.id = "article-progress-bar-active";

    // Styling Objects
    container.style.position = "fixed";
    container.style.top = 0;
    container.style.width = "100%";
    container.style.zIndex = "1000000000";
    container.style.height = settings.height.container;
    container.style.backgroundColor = settings.color.container;
    active.style.position = "fixed";
    active.style.top = 0;
    active.style.height = settings.height.active;
    active.style.backgroundColor = settings.color.active;

    // Clone ${this} for addEventListener
    let that = this;
    
    if(settings.mobile)
    {
      // Only for mobile devices
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        container.style.display = "block";
        window.addEventListener("scroll", function() {
          that.EventScroll(active);
        });
        window.addEventListener("resize", function() {
          that.EventScroll(active);
        });
        window.addEventListener("orientationchange", function() {
          that.EventScroll(active);
        });
        // Creation of objects after full page load 
        window.addEventListener("load", function() {
          that.EventScroll(active);
          container.append(active);
          document.body.append(container);
        });
      }
      else {
        container.style.display = "none";
      }
    }
    else {
      // For all devices
      window.addEventListener("scroll", function() {
        that.EventScroll(active);
      });
      window.addEventListener("resize", function() {
        that.EventScroll(active);
      });
      // Creation of objects after full page load 
      window.addEventListener("load", function() {
        that.EventScroll(active);
        container.append(active);
        document.body.append(container);
      });
    }
    return true;
  }
  
  /**
   * Changes the width of the active element.
   * @param {HTMLElement} active Active HTMLElement in container div-HTMLElement
   * @returns {Boolean} true
   */
  EventScroll(active = document.getElementById("article-progress-bar-activity"))
  {
    active.style.width = this.GetScrollPercent() + "%";
    return true;
  }

  /**
   * @returns {Number} Count of percentages (without: %)
   */
  GetScrollPercent() 
  {
    let h = document.documentElement;
    let b = document.body;

    let perc = (h.scrollTop || b.scrollTop) / ((h.scrollHeight - h.clientHeight || b.scrollHeight - b.clientHeight)) * 100;

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      if(window.innerHeight > window.innerWidth) {
        return perc + (3.25 * perc / 100);
      }
      else {
        return perc + (6 * perc / 100);
      }
    }
    else {
      return perc;
    }
  }

  Destroy()
  {
    document.getElementById("article-progress-bar-container").remove();
    document.getElementById("article-progress-bar-active").remove();

    return true;
  }
}