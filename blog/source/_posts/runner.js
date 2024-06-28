const fs = require('fs-extra');
const path = require('path');
const matter = require('gray-matter');

const directoryPath = path.join(__dirname, './');
const outputPath = path.join(__dirname, 'articles.json');

const parseMarkdownFiles = async (dir) => {
    try {
        const files = await fs.readdir(dir);
        const articles = [];

        for (const file of files) {
            if (path.extname(file) === '.md') {
                const filePath = path.join(dir, file);
                const content = await fs.readFile(filePath, 'utf8');
                const { data, content: markdownContent } = matter(content);

                const article = {
                    title: data.title,
                    thumbnail: data.thumbnail,
                    date: new Date(data.date).toISOString(),
                    slug: file.replace(".md", ""),
                    categories: data.categories,
                    author: "Justin Barnyak",
                    summary: markdownContent.split('\n')[0],  // Assuming the first line is a summary
                    content: markdownContent
                };

                articles.push(article);
            }
        }

        await fs.writeJson(outputPath, articles, { spaces: 2 });
        console.log(`Articles have been saved to ${outputPath}`);
    } catch (error) {
        console.error('Error reading markdown files:', error);
    }
};

parseMarkdownFiles(directoryPath);
