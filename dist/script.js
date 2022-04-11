function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const initialState = `
this is a paragraph.
**bold text**
 > Block Quotes!       
# heading 
## subheader
- list item 
- list item
[visit the website](https://github.com/yesimnurakar)
              
Inline code \`<div></div>\`
                
\`\`\`
  let x=1;
  let y=2;
  let z = x+y;
\`\`\`
                    
 ![React](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)                  
`;
class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: initialState });_defineProperty(this, "handleChange",

    e => {
      this.setState({
        text: e.target.value });

    });}
  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });
    return /*#__PURE__*/(
      React.createElement("div", { className: "text-center px-4" }, /*#__PURE__*/
      React.createElement("h1", { classname: "p-4 text-center" }, "Markdown Previewer"), /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h3", { className: "mt-3 text-center" }, "Enter Your Markdown:"), /*#__PURE__*/
      React.createElement("textarea", {
        id: "editor",
        className: "form-control p-2",
        value: text,
        onChange: this.handleChange })), /*#__PURE__*/


      React.createElement("div", { className: "col-6" }, /*#__PURE__*/
      React.createElement("h3", { className: "mt-3 text-center" }, "Output:"), /*#__PURE__*/
      React.createElement("div", {
        className: "preview rounded",
        id: "preview",
        dangerouslySetInnerHTML: { __html: markdown } })))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));