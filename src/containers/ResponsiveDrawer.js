import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';



// コンポーネントの準備
import ResponsiveDrawerListItem from '../components/ResponsiveDrawerListItem';

// 設定値
const drawerWidth = 240;

const bottomNavigationHeight = 50;

// スタイル
const styles = theme => ({
  root: {
    flexGrow: 1,
    // height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      // width: `100%`,
      display: `none`,
    },
  },
  toolBar: {
    justifyContent: 'space-between', // 中央寄せのため追加
    minHeight: bottomNavigationHeight,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    // height: '100vh',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.warn,
    // padding: theme.spacing.unit * 3,
    // paddingTop: `calc(${headerNavigationHeight}px)`,
    // paddingBottom: `calc(${bottomNavigationHeight}px)`,
    // paddingLeft: 0,
    // paddingRight: 0,
    [theme.breakpoints.up('md')]: {
      // paddingBottom: 10,
    },
  },
  
  // ヘッダーロゴ
  headerLogo: {
    display: 'flex',
    height: 48,
  },
});

class ResponsiveDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
    //   shareDialogOpen: false,
    };
  }

  closeDrawerNav = () => {
    this.setState({ mobileOpen: false });
  }
  openDrawerNav = () => {
    this.setState({ mobileOpen: true });
  }
  
  
  render() {
    
    // Material-ui関連
    const { classes, theme } = this.props;
    
    const drawer = (
      <div>
        {/* <List>
          <ResponsiveDrawerListItem
            to="/"
            onClick={this.closeDrawerNav}
            text="Top"
          />
        </List> */}
        <Divider />
        <List>
          <ResponsiveDrawerListItem
            to="/"
            onClick={this.closeDrawerNav}
            text="Top"
          />
          <ResponsiveDrawerListItem
            to="/about"
            onClick={this.closeDrawerNav}
            text="About"
          />
          <ResponsiveDrawerListItem
            to="/skill"
            onClick={this.closeDrawerNav}
            text="Skill"
          />
          <ResponsiveDrawerListItem
            to="/work"
            onClick={this.closeDrawerNav}
            text="Work"
          />
          <ResponsiveDrawerListItem
            to="/contact"
            onClick={this.closeDrawerNav}
            text="contact"
          />
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar className={classes.toolBar} variant="dense">
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.openDrawerNav()}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="Open Share"
            >
              <Typography variant="button" color="inherit" noWrap>
              </Typography>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.closeDrawerNav}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          {this.props.children}
        </main>
      </div>
    );
  }
}

// Material-ui関連
ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

// Material-uiのテーマ設定＋Redux設定
export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);