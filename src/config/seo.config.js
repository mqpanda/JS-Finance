const SITE_NAME = 'Bank - Vanilla JS'

export const getTitle = (title) => {
  if(title){
    return `${title} | ${SITE_NAME}`
  }
  else{
      return SITE_NAME
  }
}