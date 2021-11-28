


export async function wait(ms:number, cycles:number=1){
    for(let i = 0; i < cycles; i++) {
        await new Promise(res => {
            setTimeout(() => res(`Finished timeout (${i}/${cycles}) after ${ms}ms`), ms)
        })
    }
}
