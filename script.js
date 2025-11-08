let translate = false

function setLanguage()
{
    if (translate == false){
        document.querySelector('#pas p:nth-child(1)').textContent = 'UDWD OF RUSSIA'
        document.querySelector('#pas p:nth-child(2)').textContent = 'FOR CANATNIJ AREA'
        document.querySelector('#pas p:nth-child(4)').textContent = 'SEMENOVA'
        document.querySelector('#pas p:nth-child(5)').textContent = 'ARINA'
        document.querySelector('#pas p:nth-child(6)').textContent = 'IGOREVNA'
        document.querySelector('#pas p:nth-child(8)').textContent = 'CANATNIJ ZEH CITY RF'
        translate = true
    }
    else{
        document.querySelector('#pas p:nth-child(1)').textContent = 'УДВД РОССИИ'
        document.querySelector('#pas p:nth-child(2)').textContent = 'ПО КАНАТНОЙ ОБЛ'
        document.querySelector('#pas p:nth-child(4)').textContent = 'СЕМЕНОВА'
        document.querySelector('#pas p:nth-child(5)').textContent = 'АРИНА'
        document.querySelector('#pas p:nth-child(6)').textContent = 'ИГОРЕВНА'
        document.querySelector('#pas p:nth-child(8)').textContent = 'Г. КАНАТНЫЙ ЦЕХ РФ'
        translate = false
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    calculateBtn.addEventListener('click', function() {
        const x = parseFloat(document.getElementById('sideX').value);
        const y = parseFloat(document.getElementById('sideY').value);
        const z = parseFloat(document.getElementById('sideZ').value);
        
        if (isNaN(x) || isNaN(y) || isNaN(z) || x <= 0 || y <= 0 || z <= 0) {
            alert('Пожалуйста, введите положительные числа для всех сторон треугольника.');
            return;
        }
        
        const exists = checkTriangleExistence(x, y, z);
        const resultDiv = document.getElementById('result');
        resultDiv.style.display = 'block';
        
        if (exists) {
            const isRight = checkRightTriangle(x, y, z);
            resultDiv.className = 'success';
            resultDiv.innerHTML = `
                <h3>Результат:</h3>
                <p>Треугольник со сторонами ${x}, ${y}, ${z} существует.</p>
                <p>Треугольник ${isRight ? 'является' : 'не является'} прямоугольным.</p>
            `;
        } else {
            resultDiv.className = 'error';
            resultDiv.innerHTML = `
                <h3>Результат:</h3>
                <p>Треугольник со сторонами ${x}, ${y}, ${z} не существует.</p>
                <p>Не выполняется неравенство треугольника.</p>
            `;
        }
    });
});

function checkTriangleExistence(x, y, z) {
    return (x + y > z) && (x + z > y) && (y + z > x);
}

function checkRightTriangle(x, y, z) {
    const sides = [x, y, z].sort((a, b) => a - b);
    const a = sides[0];
    const b = sides[1];
    const c = sides[2];
    
    return Math.abs(c * c - (a * a + b * b)) < 0.0001;
}

function openLongread() {
    window.open('task.html');
}
