import RichText from '../RichText'

const ProjectBody = ({ project }) => {
    const { content } = project.fields

    return (

        <div className='max-w-none prose my-5 px-5'>
            <RichText content={content} />
        </div>
    )
}

export default ProjectBody