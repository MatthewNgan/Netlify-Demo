module.exports = function(eleventyConfig) {
    
    eleventyConfig.addFilter("toISOString", fucntion(date) {
        return date.toISOString().split('T')[0];
    });
    
}
