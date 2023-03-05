const router = require("express").Router();

const blogPosts = [
    {
        username: "JohnDoe23",
        blog_title: "Why is MVC so important?",
        description: "Overall, using the MVC pattern in JavaScript web applications can help developers create more maintainable, reusable, and scalable code, which ultimately leads to a better user experience."
    },

    {
        username: "BillGates7",
        blog_title: "Are CSS frameworks cheating or essential?",
        description: "CSS frameworks is not cheating, but they are helpful in building websites and applications quickly and efficiently. However, it's important to weigh the pros and cons and decide if a particular framework is suitable for the project's requirements and the developer's expertise. It's also essential to be aware of the framework's limitations and bloat and choose the appropriate framework for the project."
    },

    {
        username: "Steve_needs_a_Job",
        blog_title: "How should AI etiquette be maintained?",
        description: "Overall, I believe maintaining AI etiquette involves following ethical principles that promote fairness, transparency, privacy, accountability, and human oversight in the development and deployment of AI systems. By adhering to these principles, we can ensure that AI is used in a way that benefits society and protects individual rights and freedoms....But I do believe this is difficult to achieve. Thoughts?"
    }
]

router.get('/', async (req,res) => {
    res.render('homepage')
});

router.get('/dashboard', async (req,res) => {
    res.render('dashboard');
})

router.get('/login', async (req,res) => {
    res.render('login');
})

module.exports = router;