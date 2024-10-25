import { theme, ThemeConfig } from 'antd';

const antdTheme: ThemeConfig = {
    token:{
        colorPrimary: '#0050B6',
        colorLink: '#0050B6',
        colorPrimaryBg:"#090b0e",
    },
    components:{
        Layout:{
            colorBgLayout:"red"
        },
        Button:{
            boxShadow:"none"
        },
        Menu: {
            darkItemSelectedBg: '#394b4a',
            darkItemSelectedColor:"#4efec9",
            darkItemHoverBg:"#38393d",
            itemHeight:15,
            darkSubMenuItemBg:"#090b0e",
            itemBorderRadius:15,
            lineHeight:15,
          },

          Table:{
            colorBgContainer:"#212327"
          },
          Radio:{
            borderRadius: 10
          },
    }
};

export default antdTheme;