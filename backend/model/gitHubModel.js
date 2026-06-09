const db=require("../config/db");

const saveProfile= async (profile) =>{
    const sql=`
        INSERT INTO profile (
            username,
            name,
            followers,
            following,
            public_repos,
            github_url,
            avatar_url,
            score
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await db.query(sql,[
        profile.username,
        profile.name,
        profile.followers,
        profile.following,
        profile.publicRepos,
        profile.githubUrl,
        profile.avatarUrl,
        profile.score
    ]);
    return result;
}
const getAllProfiles= async()=>{
    const [rows] = await db.query("select * from profile") ;
    return rows ;
    console.log(rows);
}

const getProfileByUsername= async(username)=>{
//    const {username} = req.body;
    const rows = await db.query("select * from profile where username=?",[username]) ;
    return rows[0] ;
    
}


module.exports= {saveProfile , getAllProfiles, getProfileByUsername}