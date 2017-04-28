<Header>
    <div class="header-banner hidden-md-down"></div>

    <div class="header-bar container">
        <div class="row no-gutters">
            <div class="utility-container col-md-5 col">
                <div class="toggle-nav">
                    <i class="fa fa-bars hidden-md-up" aria-hidden="true"></i>
                </div>

                <h1 class="logo"><a href="/">acitius</a></h1>

                <form class="search input-group">
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Search..."
                    />
                    <button class="btn-inside" type="submit">
                        <i class="fa fa-fw fa-search" aria-hidden="true"></i>
                    </button>
                </form>
            </div><!-- utility-container -->

            <div class="user-info-container col-md-7 col">
                <div class="currency">
                    <div class="hover-currency-set hidden-md-down">
                        <div class="currency-set">
                            <a href="/myshop.php?action=misc" class="shop">
                                <span class="amt">230</span>
                                <span class="currency-label">Shop</span>
                            </a>

                            <a href="/bank" class="bank">
                                <span class="amt">230,000</span>
                                <span class="currency-label">Bank</span>
                            </a>
                        </div>
                    </div>

                    <div class="currency-set">
                        <a href="/webshop" class="wsg">
                            <span class="amt">2,300</span>
                            <span class="currency-label">WSG</span>
                        </a>

                        <a href="/bank" class="ap">
                            <span class="amt">23,000</span>
                            <span class="currency-label">AP</span>
                        </a>
                    </div>
                </div><!-- currency -->

                <div class="icon-badge-container notifications">
                    <i class="fa fa-fw fa-bell" aria-hidden="true"></i>
                    <span class="badge badge-pill badge-primary">23</span>
                </div><!-- notifications -->

                <div class="icon-badge-container mail">
                    <i class="fa fa-fw fa-envelope" aria-hidden="true"></i>
                    <span class="badge badge-pill badge-primary">23</span>
                </div><!-- mail -->

                <div class="user dropdown">
                    <div
                        class="dropdown-toggle"
                        id="user-dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <img src="/img/avatar-default.png" class="rounded-circle avatar" />
                        <span class="username hidden-md-down" data-hover="User">User</span>
                        <i class="fa fa-fw fa-angle-down" aria-hidden="true"></i>
                    </div><!-- dropdown-toggle -->

                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="user-dropdown-toggle">
                        <a class="dropdown-item" href="/settings">
                            <i class="fa fa-fw fa-cog"></i>
                            Settings
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/logout">
                            <i class="fa fa-fw fa-sign-out"></i>
                            Logout
                        </a>
                    </div><!-- dropdown-menu -->
                </div><!-- user -->
            </div><!-- user-info-container -->
        </div>
    </div>
</Header>
