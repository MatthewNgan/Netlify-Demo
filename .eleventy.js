module.exports = function(eleventyConfig) {
      // Folders to copy into output.
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");

    // If we use Netlify and has the _redirects file.
    eleventyConfig.addPassthroughCopy("_redirects");
    
    eleventyConfig.addFilter("toISOString", fucntion(date) {
        return date.toISOString().split('T')[0];
    });
    
}
