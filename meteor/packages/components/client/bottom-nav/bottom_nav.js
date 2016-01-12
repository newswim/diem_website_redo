"use strict";
class BottomNav extends BlazeComponent {
    onCreated() {
        var me = this;
        me._activeTab = new ReactiveVar(null);

        // rather than writing the logic within this component, we're using
        // a package called active-route

        // me._showHomeButton = new ReactiveVar();

        me.menuTabs = [
            {text: "testimonials",  route: 'testimonials'  },
            {text: "about us",      route: 'about'  },
            {text: "portfolio",     route: 'portfolio'   }
        ];
    }

    events() {
      return super.events().concat({
        'click .menuTab'         : this.onTabClick
      });
    }

    onTabClick() {
        var me = this,
            tab = me.currentData();

        me._activeTab.set(tab.route);
        FlowRouter.go("/" + me._activeTab.get());
    }

    getIsActive()  {
        const me = this,
           datum = me.currentData(),
         checker = ActiveRoute.name(new RegExp('testimonials|about|portfolio'));

        if (datum.route === me._activeTab.get() && checker) {
            return 'active';
        }
    }

    onRendered() {
        //
    }

}

BottomNav.register('BottomNav');
