const FileIcons = {
  // 压缩文件
  ...(['zip','rar','7z','tar','gz','bz2','xz','lzma','ar','cab','lha','ace','z','tz','tgz'].reduce((obj, ext) => {
    obj[ext] = { icon: 'fa-file-archive', color: '#f59e0b', bg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)' };
    return obj;
  }, {})),

  // 音频文件
  ...(['mp3','wav','flac','aac','ogg','m4a','wma','ape','opus','amr','ac3','dts','ra','m4p','m4b'].reduce((obj, ext) => {
    obj[ext] = { icon: 'fa-file-audio', color: '#f59e0b', bg: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)' };
    return obj;
  }, {})),

  // PDF文件
  'pdf': { icon: 'fa-file-pdf', color: '#ef4444', bg: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)' },
  
  // 文档文件
  ...(['doc','docx','odt','wps'].reduce((obj, ext) => {
    obj[ext] = { icon: 'fa-file-word', color: '#3b82f6', bg: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)' };
    return obj;
  }, {})),
  
  // 表格文件
  ...(['xls','xlsx','csv','ods','ets'].reduce((obj, ext) => {
    obj[ext] = { icon: 'fa-file-excel', color: '#10b981', bg: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)' };
    return obj;
  }, {})),
  
  // 演示文稿文件
  ...(['ppt','pptx','odp','dps'].reduce((obj, ext) => {
    obj[ext] = { icon: 'fa-file-powerpoint', color: '#a855f7', bg: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)' };
    return obj;
  }, {})),
  
  // 文本文件
  ...(['txt','rtf','md','log','readme'].reduce((obj, ext) => {
    obj[ext] = { icon: 'fa-file-lines', color: '#64748b', bg: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)' };
    return obj;
  }, {})),

  // 代码文件
  ...(['js','jsx','ts','tsx','html','htm','css','scss','sass','less','vue','svelte','php','py','java','cpp','c','h','hpp','cs','vb','go','rs','swift','kt','scala','rb','pl','sh','bat','cmd','ps1','r','m','matlab','sql','json','xml','yaml','yml','toml','ini','conf','config','env','dockerfile','makefile','cmake'].reduce((obj, ext) => {
    obj[ext] = { icon: 'fa-file-code', color: '#8b5cf6', bg: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)' };
    return obj;
  }, {})),

  // 可执行文件
  ...(['exe','msi','dmg','deb','rpm','apk','apks','app','pkg','snap','flatpak','appimage','run','bin','command','out','appbundle','xap','click','saf','ipa','jar','war','ear','nar','air','gadget','wsb'].reduce((obj, ext) => {
    obj[ext] = { icon: 'fa-file-executable', color: '#8b5cf6', bg: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)' };
    return obj;
  }, {})),

  // 字体文件
  ...(['ttf','otf','woff','woff2','eot','fon','fnt','pfb','pfm','afm','bdf','pcf','snf','ttc','dfont','suitcase','resource'].reduce((obj, ext) => {
    obj[ext] = { icon: 'fa-font', color: '#f59e0b', bg: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)' };
    return obj;
  }, {})),

  // 数据库文件
  ...(['db','sqlite','sqlite3','mdb','accdb','dbf','dbc','frm','myd','myi','ibd','aria','csm'].reduce((obj, ext) => {
    obj[ext] = { icon: 'fa-database', color: '#3b82f6', bg: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)' };
    return obj;
  }, {})),

  // 镜像文件
  ...(['iso','img','bin','cue','mdf','mds','nrg','ccd','cif','c2d','daa','bwt','b5t','b6t','isz','lcd','vcd','svcd','cso','zso','dmg','sparsebundle','sparseimage','toast','dmgpart','imgpart','smi','scpt'].reduce((obj, ext) => {
    obj[ext] = { icon: 'fa-disc', color: '#64748b', bg: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)' };
    return obj;
  }, {})),

  // 默认文件
  'default': { icon: 'fa-file', color: '#64748b', bg: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)' }
};

function getFileIconInfo(extension) {
  const ext = extension.toLowerCase();
  
  return FileIcons[ext] || FileIcons['default'];
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FileIcons, getFileIconInfo };
} else {
  window.FileIcons = FileIcons;
  window.getFileIconInfo = getFileIconInfo;
}
