import React from 'react';

const navBarHeight = 50;
const divider = 5;
const title = 45;
const containerBoxHeight = window.innerHeight - navBarHeight - divider;
const containerFotterHeight = (window.innerHeight - 50) * 0.2;

export default {
    screen: {},
    container: {
        height: '100vh',
        minHeight: '100vh',
    },
    navbar: {
        height: '50px',
    },
    logoNavbar: {
        height: '45px',
    },
    AboutDialog: {
        fontFamily: 'PingFang-SC-Regular',
        width: '600px',
    },
    version: {
        fontSize: 12,
    },
    quit: {
        width: '250px',
    },
    titleLine: {
        paddingTop: '45px',
        marginRight: '0px',
        marginLeft: '0px',
        marginBottom: '0px',
        borderBottom: '5px solid #01579B',
    },
    editorTitle: {
        fontFamily: 'PingFang-SC-Regular',
        fontSize: 28,
        paddingTop: '20px',
        paddingBottom: '20px',
        textAlign: 'center',
        height: '75px',
    },
    editorSectionIconContainer: {
        textAlign: 'center',
        verticalAlign: 'middle',
    },
    editorSectionIcon: {
        width: '128px',
    },
    editorSectionTitle: {
        fontSize: 24,
        fontFamily: 'PingFang-SC-Regular',
    },
    editorSectionBtn: {
        height: '45px',
        width: '120px',
        fontSize: 16,
        fontFamily: 'PingFang-SC-Regular',
    },
    editorSectionDesc: {
        fontFamily: 'PingFang-SC-Light',
        fontSize: 14,
        paddingLeft: '0px',
        paddingRight: '25px',
        fontWeight: 'Regular',
        height: '80px',
    },
    editorSection: {
        paddingLeft: '30px',
        paddingBottom: '30px',
    },
    aboutLogoContainer: {
        textAlign: 'center',
    },
    aboutLogo: {
        width: '300px',
    },
    aboutVersionInfo: {
        marginTop: '45px',
        fontFamily: 'PingFang-SC-Bold',
        fontSize: 12,
    },
    side: {
        minHeight: '100%',
        backgroundColor: '#484d5e',
    },
    content: {},
};
