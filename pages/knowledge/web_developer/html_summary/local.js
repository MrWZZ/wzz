//页面数组
var pages = [
  { title:"创建文档", url:"pages/1_creating_html.html" },
  { title:"标记文字", url:"pages/2_marking_word.html" },
  { title:"组织内容", url:"pages/3_organizing_content.html" },
  { title:"文档分节", url:"pages/4_document_segmentation.html" },
  { title:"表格元素", url:"pages/5_table_element.html" },
  { title:"表单", url:"pages/6_form.html" },
  { title:"嵌入元素", url:"pages/7_inset.html" }
];
var info = {
  title : "HTML5总结",
  description : "————内容摘抄自《HTML5权威指南》"
}
Controller.loadView(mainData.view.summary,Controller.pageInit,[pages,info]);
