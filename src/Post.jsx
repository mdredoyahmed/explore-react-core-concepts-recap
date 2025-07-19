export default function Post({props}){
    const {title , body} = props;
    return (
        <div>
            <h3>titele:{title}</h3>
            <p>Body:{body}</p>

        </div>
    )
}