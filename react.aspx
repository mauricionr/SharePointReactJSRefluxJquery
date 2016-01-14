<%@ Page Language="C#" masterpagefile="~masterurl/default.master" title="Untitled 1" inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
    <%@ Register tagprefix="SharePoint" namespace="Microsoft.SharePoint.WebControls" assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
        <asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
            <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
            <script type="text/javascript" src="/_layouts/15/sp.js"></script>
            <script src="https://code.jquery.com/jquery-2.1.4.js"></script>
            <script src="https://cdn.jsdelivr.net/refluxjs/0.2.11/reflux.min.js"></script>
            <script src="https://cdn.jsdelivr.net/react/0.14.0-rc1/react.js"></script>
            <script src="https://cdn.jsdelivr.net/react/0.14.0-rc1/react-dom.js"></script>
            <link rel="stylesheet" type="text/css" href="../SiteAssets/react/style.css" />
        </asp:Content>

        <asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
            <div id="react-app"></div>
            <script src="../SiteAssets/react/actions/contactsactions.js"></script>
            <script src="../SiteAssets/react/stores/spcontactsstores.js"></script>
            <script src="../SiteAssets/react/ContactItem.js"></script>
            <script src="../SiteAssets/react/ContactForm.js"></script>
            <script src="../SiteAssets/react/ContactView.js"></script>
            <script src="../SiteAssets/react/main.js"></script>
        </asp:Content>