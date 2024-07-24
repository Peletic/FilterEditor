import {createUnauthenticatedAuth} from "@octokit/auth-unauthenticated";
import {request} from "@octokit/request";
import fs from "fs";
import decompress from "decompress"

async function download() {
    const auth = await createUnauthenticatedAuth({
        reason: 'Downloading a useful repo.'
    })

    const requestWithAuth = request.defaults({
        request: {
            hook: auth.hook,
        },
        mediaType: {
            previews: ["machine-man"],
        },
    });

    const req = await requestWithAuth('GET /repos/{owner}/{repo}/zipball/{ref}',
        {
            owner: 'NotEnoughUpdates',
            repo: 'NotEnoughUpdates-REPO',
            ref: '',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })

    const buffer = Buffer.from(req.data)

    if (fs.existsSync('generated/repo.zip')) fs.rmSync('generated/repo.zip')
    if (fs.existsSync('generated/repo')) fs.rmSync('generated/repo', {recursive: true})

    fs.writeFileSync('generated/repo.zip', buffer)
}

async function unzip() {
    await decompress('generated/repo.zip', 'generated/repo').then(files => {
        console.log("unzipped")
    })

}

async function read() {
    const data = []
    for (const path of fs.readdirSync("generated/repo/NotEnoughUpdates-NotEnoughUpdates-REPO-670a335/items")) {
        const dat = JSON.parse(fs.readFileSync("generated/repo/NotEnoughUpdates-NotEnoughUpdates-REPO-670a335/items/" + path).toString())
        data.push(dat)
    }

    const ultimates = data.filter(el => el["internalname"].toString().toUpperCase().includes("ULTIMATE"))
    const attributes = data.filter(el => el["internalname"].toString().toUpperCase().includes("MAXED_ATTRIBUTE_SHARD"))[0]

    console.log(ultimates)
    console.log(attributes)

    const attrList = attributes["lore"].map(str => str.toString().substring(2, str.toString().length - 2).toLowerCase().replaceAll(" ", "_")).splice(-2, 2)
    console.log(attrList)

    const ultIds = ultimates.map(el => el["internalname"].toString()).filter(str => str.endsWith(";5")).map(str => str.replaceAll(";5", ""))
    console.log(ultIds)

    const items = data.filter((entry) => entry.itemid !== "minecraft:enchanted_book").map((entry) => {
        return  {
            "itemId": entry["internalname"],
            "displayName": entry["displayname"],
            "desc": entry["lore"]
        }
    })
    console.log(items)

    fs.writeFileSync("src/lib/data/constants/attributes.json", JSON.stringify(attrList));
    fs.writeFileSync("src/lib/data/constants/ultimates.json", JSON.stringify(ultIds));
    fs.writeFileSync("src/lib/data/constants/items.json", JSON.stringify(items))
}

read()