function fixImageSrc(src: string) {
  if (src.startsWith("/") && process.env.RUN_ENV != "dev") {
    return "/posts" + src
  }
  return src
}

export default fixImageSrc