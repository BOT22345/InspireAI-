import {SquarePen, Hash, Image, Eraser, Scissors, FileText} from 'lucide-react';
import logo from "./website_icon.png";
import gradient_background from "./gradient_background.jpg";
import profile_img_1 from "./profile_img_1.jpg";
export const assets={
    logo,
    gradient_background,
    profile_img_1,
}

export const AiToolsData=[
    {
        title: 'AI Article Writer',
        description: 'Generate high-quality, engaging articles on any topic with our AI writing technology.',
        Icon: SquarePen,
        bg:{ from: '#3588F2', to : "#0BB0D7"},
        path: '/ai/write-article'

    },
    {
        title: 'Blog Title Generator',
        description: 'Find the perfect, catch title for your blog posts with our AI-powered generator.',
        Icon: Hash,
        bg:{ from: '#B153EA', to : "#E549A3"},
        path: '/ai/blog-titles'
    },
    {
        title: 'AI Image Generation',
        description: 'Create stunnign visuals with out AI image generation tool, Experience the power of AI',
        Icon: Image,
        bg:{ from: '#20C363', to : "#11B97E"},
        path: '/ai/generate-images'
    },
    {
        title:'Background Removal',
        description: 'Effortlessly remove background from your images with our AI-driven tool.',
        Icon: Eraser,
        bg: {from:'#F76C1C', to: '#F04A3C'},
        path: '/ai/remove-background'
    },
    {
        title: 'Object Removal',
        description: 'Remove unwanted objects from your images seamlessly with out AI object removal tool.',
        Icon: Scissors,
        bg:{ from: '#5C6AF1', to : "#427DF5"},
        path: '/ai/remove-object'
    },
    {
        title: 'Resume Reviewer',
        description: 'Get your resume reviewed by AI to Imporve your changes of landing your dream job.',
        Icon: FileText,
        bg:{ from: '#12B7AC', to : "#08B6CE"},
        path: '/ai/review-resume'
    },
]

export const dummyTestimonialData=[
    {
        image: assets.profile_img_1,
        name: 'Jhone Doe',
        title: 'Marketing Director, TechCorp',
        content: 'ContentAI has revolutionized our content workflow. The quality of the articles is outstanding, and it saves us hours of work every week.',
        rating:4,
    },
    {
        image: assets.profile_img_1,
        name: 'Davil Lee',
        title: 'Content Writer, TechCorp',
        content: 'ContentAI has transformed our content creation process. The AI tools have helped us produce high-quality content faster than ever before.',
        rating:4,
    },
]