type Fiturdrag = {
    drag: () => void
};

type Resizeable = {
    resize: () => void
};

type UIWidget = Fiturdrag & Resizeable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

