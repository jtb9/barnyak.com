export default function CloudHeader() {

    const renderCloud = (cloudType: string, right: number, top: number, width: number) => {
        return <div style={{ position: 'absolute', left: '50%', zIndex: '2' }}>
            <img style={{ width: `${width}px`, position: 'relative', top: top.toString() + 'px', right: right.toString() + 'px' }} src={"https://cdn.barnyak.com/effects/" + cloudType + ".png"} />
        </div>
    }

    return <div style={{ position: 'relative' }}>
        
        {/* {renderCloud("cloud2", 40, 100)} */}
        {/* <div style={{ position: 'absolute', left: '50%' }}>
            <img style={{ width: '60px', position: 'relative', top: '220px', right: '90px' }} src="https://cdn.barnyak.com/effects/rope.png" />
        </div> */}
        {/* {renderCloud("cloud1", -90, 90, 80)}
        {renderCloud("cloud1", 250, 110, 90)}
        {renderCloud("cloud1", 55, 210, 95)} */}

        {renderCloud("cloud4", 100, 100, 200)}

        {renderCloud("cloud3", 60, 40, 100)}
        {renderCloud("cloud3", 190, 190, 85)}
        {renderCloud("cloud3", -140, 140, 110)}
        <div style={{ height: '300px', width: '100%' }}></div>
    </div>
}
