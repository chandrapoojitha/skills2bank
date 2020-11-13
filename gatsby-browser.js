class SideBarBtns {

    
    Initialize() {
      
      window.addEventListener("scroll", this.ToggleButtons)    
      
      document.getElementById("scroll-btn").addEventListener("click", this.ScrollToTop);
    }
  
   
    ToggleButtons() {
      
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        
        document.getElementById("scroll-btn").style.display = "block";      
      } else {
       
        document.getElementById("scroll-btn").style.display = "none";    
      }
    }
  
   
    ScrollToTop() {
      
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
  
  
  exports.onRouteUpdate = () => {

    let sidebarbtns = new SideBarBtns();
    
    if (document.getElementById("scroll-btn")) {
      
      sidebarbtns.Initialize();
    }
  }