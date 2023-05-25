export const Demo = function () {
    const bien = {
        a: 'conga',
        b: 'con cho'
    };
    const {b} = bien;
    console.log(b);
    return(
        <>
   <div>{b}</div>
        </>
)
};