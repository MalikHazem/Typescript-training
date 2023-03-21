type Buttons = 
{
    up: string,
    down: string,
    left: string,
    right: string
}

type Last = Buttons & 
{
    x: boolean
}

const getActions = (btns: Last) =>
{
    console.log(`Action For Button up Is ${btns.up}`);
    console.log(`Action For Button down Is ${btns.down}`);
    console.log(`Action For Button left Is ${btns.left}`);
    console.log(`Action For Button right Is ${btns.right}`);
}

getActions({up: "Jump", down: "GO Down", left: "GO left", right: "GO right"})

getActions({up: "Jump", down: "GO Down", left: "GO left", right: "GO right", x: true})

