/*
MIT License

Copyright (c) 2020 Fayaz Bin Salam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

import {giftIcon} from './MainItems'

export const skills = [
    {
        text: "Programming/Markup Languages",
        arr: [
            {
                title: 'C',
                logo: 'https://seeklogo.com/images/C/c-logo-672525892C-seeklogo.com.png',
            },
            {
                title: 'C++',
                logo: 'https://seeklogo.com/images/C/c-logo-1B1817C041-seeklogo.com.png',
            },
            {
                title: 'Java',
                logo: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
            },
            {
                title: 'JavaScript',
                logo: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg',
            },
            {
                title: 'SQL',
                logo: 'https://www.svgrepo.com/show/255832/sql.svg',
            },
            {
                title: 'HTML',
                logo: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg',
            },
            {
                title: 'CSS',
                logo: 'https://seeklogo.com/images/C/css3-logo-F1923C8D0E-seeklogo.com.png',
            },
            {
                title: 'Assembly',
                logo: 'data:image/png;base64,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',
            },
            {
                title: 'Batch',
                logo: 'https://cdn0.iconfinder.com/data/icons/software-4/24/console_command_prompt_shell_program-512.png',
            },
            {
                title: 'Bash/Shell/PowerShell',
                logo: 'https://docs.microsoft.com/en-us/powershell/media/index/powershell_128.svg',
            },
            {
                title: 'XML',
                logo: 'https://www.vectorlogo.zone/logos/w3c_xml/w3c_xml-icon.svg'
            },
        ]
    },
    {
        text: "EEE",
        arr: [
            {
                title: 'MATLAB',
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/667px-Matlab_Logo.png',
            },
            {
                title: 'Control System',
                logo: 'https://www.lucymaddison.com/wp-content/uploads/2018/03/control-systems-logos2.jpg',
            },
            {
                title: 'Cadence',
                logo: 'https://1000logos.net/wp-content/uploads/2020/08/Cadence-Logo.png',
            },
            {
                title: 'Proteus',
                logo: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Proteus_Design_Suite_Atom_Logo.png',
            },
            {
                title: 'Power System',
                logo: 'https://w7.pngwing.com/pngs/380/541/png-transparent-electric-power-system-power-flow-study-power-system-simulation-electricity-octave-matlab-logo-engineering-electricity.png'
            },
            {
                title: 'PLC',
                logo: 'https://as1.ftcdn.net/jpg/02/44/80/22/500_F_244802275_q9MRSPTkxqD94Tg1KUjnM0Wu55NiHDDx.jpg'
            },
            {
                title: 'Electronics',
                logo: 'https://i.pinimg.com/originals/5c/00/e5/5c00e519ad324b8ae46e6c91bd3bdecc.jpg',
            },
            {
                title: 'AC & DC',
                logo: 'https://t4.ftcdn.net/jpg/03/33/33/75/360_F_333337529_tZ8ATDYFxHXSsJP3SHHdPdsA3oksz3Fj.jpg'
            },

        ]
    },
    {
        text: "Libraries/Frameworks",
        arr: [
            {
                title: 'Android App Development',
                logo: 'https://www.vectorlogo.zone/logos/android/android-icon.svg'
            },
            {
                title: 'NodeJS',
                logo: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg'
            },
            {
                title: 'ExpressJS',
                logo: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg'
            },
            {
                title: 'ReactJS',
                logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg'
            },
            {
                title: 'MongoDB',
                logo: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.svg'
            },
            {
                title: 'Mongoose',
                logo: 'https://images.opencollective.com/proxy/images?src=https%3A%2F%2Fopencollective-production.s3-us-west-1.amazonaws.com%2F7a00cdd0-fae4-11e7-ae09-7f36f712693a.png&height=640'
            },
            {
                title: 'OAuth2',
                logo: 'https://oauth.net/images/oauth-logo-square.png'
            },
            {
                title: 'Firebase',
                logo: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg'
            },
            {
                title: 'Material-UI',
                logo: 'https://camo.githubusercontent.com/cf05625198fe7b6ad8a302d1ce16bc99b93ec2ac/68747470733a2f2f6d6174657269616c2d75692e636f6d2f7374617469632f6c6f676f2e737667'
            },
            {
                title: 'GSON',
                logo: 'https://s.appbrain.com/static/201904161618755/blob/sdk-logos/google_gson.png'
            },
            {
                title: 'Babel',
                logo: 'https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg'
            },
        ]
    },
    {
        text: "Human Languages",
        arr: [
            {
                title: 'Bengali',
                desc: "Native",
                logo: 'https://www.flaticon.com/premium-icon/icons/svg/3097/3097000.svg',
            },
            {
                title: 'Chittagonian',
                desc: "Native",
                logo: 'https://www.flaticon.com/premium-icon/icons/svg/3097/3097008.svg',
            },
            {
                title: 'English',
                desc: "Fluent",
                logo: 'https://www.flaticon.com/premium-icon/icons/svg/3097/3097023.svg',
            },
            {
                title: 'Hindi',
                desc: "Conversational",
                logo: 'https://www.flaticon.com/premium-icon/icons/svg/3097/3097042.svg',
            },
            {
                title: 'Urdu',
                desc: "Conversational",
                logo: 'https://www.flaticon.com/premium-icon/icons/svg/3097/3097115.svg',
            },
            {
                title: 'Arabic',
                desc: "Beginner",
                logo: 'https://www.flaticon.com/premium-icon/icons/svg/3096/3096991.svg',
            },
        ]
    },
    {
        text: "Others",
        arr: [
            {
                title: 'Git',
                logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
            },
            {
                title: 'GitHub',
                logo: 'https://www.vectorlogo.zone/logos/github/github-icon.svg'
            },
            {
                title: 'GitLab',
                logo: 'https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg'
            },
            {
                title: 'Arduino',
                logo: 'https://www.vectorlogo.zone/logos/arduino/arduino-icon.svg'
            },
            {
                title: 'Atmel',
                logo: 'https://download.logo.wine/logo/Atmel/Atmel-Logo.wine.png'
            },
            {
                title: 'IntelliJ IDEA',
                logo: 'https://resources.jetbrains.com/storage/products/intellij-idea/img/meta/intellij-idea_logo_300x300.png'
            },
            {
                title: 'Webstorm',
                logo: 'https://cdn.worldvectorlogo.com/logos/webstorm-icon.svg'
            },
            {
                title: 'VS Code',
                logo: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code.svg'
            },
            {
                title: 'Automation',
                logo: 'https://image.flaticon.com/icons/svg/1035/1035688.svg'
            },
            {
                title: 'Heroku',
                logo: 'https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg'
            },
            {
                title: 'Yarn',
                logo: 'https://www.vectorlogo.zone/logos/yarnpkg/yarnpkg-icon.svg'
            },
            {
                title: 'Facebook SDKs',
                logo: 'https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg'
            },
            {
                title: 'Google SDKs',
                logo: 'https://www.vectorlogo.zone/logos/google/google-icon.svg'
            },
            {
                title: 'npm',
                logo: 'https://www.vectorlogo.zone/logos/npmjs/npmjs-icon.svg'
            },
        ]
    },
]

export const projects = [
    {
        text: "Android Apps",
        arr: [
            {
                title: 'Library(Ongoing)',
                logo: 'https://images.vexels.com/media/users/3/216637/preview2/5cb9c03787ab7860fdd5dc4d13a72043-digital-library-logo-design.jpg',
                desc: 'Digital platform to share, sell & buy old books',
            },
            {
                title: 'Food Store',
                logo: 'https://thumbs.dreamstime.com/b/vegetables-shopping-cart-trolley-grocery-logo-icon-design-vector-171090350.jpg',
                desc: 'A better & more reliable alternative of traditional food store.',
                link: "https://gitlab.com/m666362/single-data-firebase-database-android-practice"
            },
            {
                title: 'ফিফা ওয়ার্ল্ডকাপ ২০১৮ - (Discontinued)',
                logo: 'https://lh3.googleusercontent.com/zuluY4xOXx7PIMCvul4fowmOvMlc-3wsHwxGAASo3qZQ-9byd-uJWZ9kzUgclD4Nhrg=s180',
                desc: 'FIFA Worldcup 2018 All In One.',
                link: "https://apkpure.com/%E0%A6%AB%E0%A6%BF%E0%A6%AB%E0%A6%BE-%E0%A6%93%E0%A7%9F%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B2%E0%A7%8D%E0%A6%A1%E0%A6%95%E0%A6%BE%E0%A6%AA-%E0%A7%A8%E0%A7%A6%E0%A7%A7%E0%A7%AE-live-tv-scores-more/p32929.worldcup2018"
            },
            {
                title: 'Health Benefit of Sunnah',
                logo: 'https://lh3.googleusercontent.com/ILrto9KguXlr-clbhYKUonpnHszgNp_N5Qvc8_u9QaM71oaqNKcYql2sV3sqZ7nqzsc=s180',
                desc: 'Details description of Sunnah way of life.',
                link: "https://gitlab.com/m666362/single-data-firebase-database-android-practice"
            },
            {
                title: 'FireBase Chat',
                logo: 'https://image.freepik.com/free-vector/chat-logo-design_93835-108.jpg',
                desc: 'Powerful, Lightweight firebase chat app.',
                link: "https://gitlab.com/m666362/single-data-firebase-database-android-practice"
            },
            {
                title: 'Calculator',
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7j6UsUyaEGat3jSDTWgjBuda-di6rc790Ng&usqp=CAU',
                desc: 'Simple Android Calculator.',
                link: "https://github.com/m666362/Android-Calculator"
            },
            {
                title: 'Server CRUD',
                logo: 'https://i.morioh.com/683b232a73.png',
                desc: 'Create, Read, Update & Delete method testing',
                link: 'https://github.com/m666362/Server-testing-android-for-client-practice'
            },
        ]
    },
    {
        text: "WebApps",
        arr: [
            {
                title: 'Multi-Poster (Material-ui Ongoing)',
                logo: 'https://image.flaticon.com/icons/svg/2762/2762575.svg',
                desc: 'Post status, image and video on facebook, twitter and youtube by one click.',
                link: "https://gitlab.com/richit/multiposter_reactjs_siemens"
            },
            {
                title: 'E-Medicine (Theme-ui Ongoing )',
                logo: 'https://image.flaticon.com/icons/svg/2762/2762575.svg',
                desc: 'Online Medicine Service.',
                link: "https://gitlab.com/richit/multiposter_reactjs_siemens"
            },
            {
                title: 'React Calculator',
                logo: 'https://image.flaticon.com/icons/svg/2762/2762575.svg',
                desc: 'Simple React Calculator.',
                link: 'https://m666362.github.io/React_calculator/'
            },
            {
                title: 'React Todo App',
                logo: 'https://image.flaticon.com/icons/svg/2762/2762575.svg',
                desc: 'Organize your task.',
                link: 'https://m666362.github.io/React-to-do-app/'
            },
            {
                title: 'IndecisionApp',
                logo: 'https://image.flaticon.com/icons/svg/2762/2762575.svg',
                desc: 'My first ReactJS app.',
                link: 'https://m666362.github.io/Indicision/'
            },

        ]
    },
    {
        text: "Electronic Project",
        arr: [
            {
                title: 'Passenger Assistance in Bangladesh Railway',
                logo: 'https://i.ibb.co/sFYYfLz/rail.png',
                desc: 'Provides platform number , bogie sequence and train location through gps & gsm technology.',
            },
            {
                title: 'JK Flip Flop Clock',
                logo: 'https://st2.depositphotos.com/6831718/10871/v/950/depositphotos_108712212-stock-illustration-clock-icon-clock-symbol-clock.jpg',
                desc: 'Simple clock using JK Flip Flop.',
            },
            {
                title: 'Anti-theft System',
                logo: 'https://www.clipartmax.com/png/middle/243-2432706_security-data-protection-anti-theft-lock-logo.png',
                desc: 'Electronics security based device to protect your valuabe things.',
            },
            {
                title: 'Simple Power Bank',
                logo: 'https://previews.123rf.com/images/urfandadashov/urfandadashov1809/urfandadashov180900149/109060416-powerbank-vector-icon-isolated-on-transparent-background-powerbank-logo-concept.jpg',
                desc: 'My first electronics project using several electronic devices which works like power bank.',
            },

        ]
    },
    {
        text: "Research Publication",
        arr: [
            {
                title: 'Design of an Automated Vehicle Speed Detector and Surveillance System for Bangladesh',
                logo: 'https://w7.pngwing.com/pngs/449/374/png-transparent-institute-of-electrical-and-electronics-engineers-electrical-engineering-ieee-xplore-ieee-power-energy-society-technology-electronics-logo-engineering.png',
            },
            {
                title: 'Design and Implementation of a Passenger Assistance In Bangladesh Railway (Under Review)',
                logo: 'https://w7.pngwing.com/pngs/449/374/png-transparent-institute-of-electrical-and-electronics-engineers-electrical-engineering-ieee-xplore-ieee-power-energy-society-technology-electronics-logo-engineering.png',
            },
        ]
    }
]

export const contactInfos = [
    {
        text: "Contact me",
        arr: [
            {
                title: 'Mail',
                logo: 'https://image.flaticon.com/icons/png/512/552/552486.png',
                desc: 'mdrayhan9464@gmail.com',
                link: 'https://mail.google.com/mail/u/0/#sent?compose=DmwnWsTQQCSHHVmMbqZJZWPHFzxJppqHjRqVKWlnLwzVTQdSbfLBcMzHgLvnFpnCxTxJlwVVVKKL'
            },
            {
                title: 'Skype',
                logo: 'https://image.flaticon.com/icons/svg/174/174869.svg',
                desc: '8801766324950',
                link: 'skype:8801766324950?chat'
            },
            {
                title: 'WhatsApp',
                logo: 'https://image.flaticon.com/icons/svg/733/733585.svg',
                link: 'https://api.whatsapp.com/send?phone=8801766324950'
            },
            {
                title: 'Facebook',
                logo: 'https://image.flaticon.com/icons/svg/124/124010.svg',
                link: 'https://www.facebook.com/mdrayhan9464'
            },

        ]
    },
    {
        text: "Website Profiles",
        arr: [
            {
                title: 'GitHub',
                logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
                link: 'https://github.com/m666362/'
            },
            {
                title: 'GitHub',
                logo: 'https://about.gitlab.com/images/press/logo/jpg/gitlab-icon-rgb.jpg',
                link: 'https://gitlab.com/m666362'
            },
            {
                title: 'LinkedIn',
                logo: 'https://image.flaticon.com/icons/svg/174/174857.svg',
                link: 'https://www.linkedin.com/in/mdrayhan9464'
            },
            {
                title: 'Resume',
                logo: 'https://www.clipartmax.com/png/middle/308-3085721_resume-png-clipart-my-resume-icon-png.png',
                link: 'https://drive.google.com/file/d/1mxjDST4OAGTkjswheLfTlxW3pkpUhD2S/view?usp=sharing'
            },
        ]
    }
]
