import { useParams } from "react-router-dom";
import { projects } from '../utils/data';
import imgNetlify from '../assets/icons/netlify.png';
import imgGitHub from '../assets/icons/gitHub-black.svg';
import imgVercel from '../assets/icons/vercel.svg'
import style from '../css_modules/projectPageId.module.css';

const ProjectPageId = () => {
    const { id } = useParams();

    const project = projects.find((p) => p.id === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    const skills = project.skills && Array.isArray(project.skills) ? project.skills.join(', ') : 'No skills listed';
    const platformIcons = {
        netlify: imgNetlify,
        vercel: imgVercel,
        "github-pages": imgGitHub,
    };

    return (
        <main className="section">
            <div className="container">
                <div className={style.project_details}>
                    <h1 className="title_1">{project.title}</h1>
                    <img src={project.imgBig} alt={project.title} className={style.project_details__img} />
                    <div className={style.project_details__skills}>
                        <p>Skills: {skills}</p>
                    </div>

                    {project.demo && (
                        <a href={project.demo.url} target="_blank" className={style.btn_outline}>
                            <img
                                src={platformIcons[project.demo.platform]}
                                alt={project.demo.platform}
                            />
                            Live demo
                        </a>
                    )}
                    {project.description && (
                        <div className={style.project_details__desc}>
                            <p>{project.description}</p>
                        </div>
                    )}
                    {/* {project.gitHub && (
                        <a href={project.gitHub} target="_blank" className={style.btn_outline}>
                            <img src={imgGitHub} alt="gitHub" />
                            GitHub repo
                        </a>
                    )}
                    {project.netlify && (
                        <a href={project.netlify} target="_blank" className={style.btn_outline}>
                            <img src={imgNetlify} alt="netlify" />
                            Live demo
                        </a>
                    )} */}
                </div>
            </div>
        </main>
    )
};

export default ProjectPageId;
