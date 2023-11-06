/**
 * Поле ввода для названия Темы урока
 */
const themeField = document.getElementById('theme-field');


/**
 * Select класса
 */
const classField = document.getElementById('class-select');
/**
 * Список с классами
 */
const classList = document.getElementById('class-list');
/**
 * Options c классами
 */
const classItems = document.querySelectorAll('.option');
/**
 * Выбранный элемент
 */
let selected = classItems[0];

/**
 * Список тегов
 */
const tagList = document.querySelectorAll('.tag-item')
/**
 * Кнопка показа/скрытия большего кол-ва тегов
 */
const moreTags = document.getElementById('show-more')
/**
 * Кол-во тегов которые будут всегда показываться
 * @type {number}
 */
let showTagsCount = 6;


/**
 * Блок с  полем ввода для Цели уровка
 */
const targetBlock = document.getElementById('target-block');
/**
 * Поле ввода для Цели урока
 */
const targetField = document.getElementById('target-field');
/**
 * Кол-во символов в поле target (Цель уровка)
 */
const targetLength = document.getElementById('target-length');
/**
 * Максимальное кол-во символов в поле с target (Цель уровка)
 * @type {number}
 */
let maxLength = 200;


/**
 * Кнопка Назад
 */
const btnBack = document.getElementById('btn-back');
/**
 * Кнопка Следующий шаг
 */
const btnNext = document.getElementById('btn-next');
/**
 * Деактивирует кнопку если хотябы одно из полей пусто
 */
const disabled = () => {
    !(!targetField.value.length || !themeField.value.length) ? btnNext.removeAttribute('disabled') : btnNext.setAttribute('disabled', true)
}
disabled()


// Событие изменения содержимоего для themeField (input)
themeField.addEventListener('input', (event) => {
    disabled()
})


// Событие изменения содержимоего для targetField (textarea)
targetField.addEventListener('input', (event) => {
    targetLength.textContent = `${event.target.value.length} / ${maxLength}`;
    if (event.target.value.length > maxLength) {
        targetBlock.classList.add('error');
        btnNext.textContent = 'Создать презентацию';
    } else {
        targetBlock.classList.remove('error');
        btnNext.textContent = 'Следующий шаг';
    }
    disabled()
})

// Событие клик для кнопки "Показать больше вариантов"
moreTags.addEventListener('click', (event)=>{
    for (let i = showTagsCount; i < tagList.length; i++) {
        tagList[i].classList.toggle('hide')
    }
})
moreTags.click()

// Клик  по тегам
tagList.forEach((element)=>{
    element.addEventListener('click', (event) =>{
        themeField.value = event.target.textContent;
    })
})


// Клик по полю с классом (со списком)
classField.addEventListener('click', (event) => {
    console.log(12345)
    classList.classList.toggle('close')
    event.target.classList.toggle('close')
})
// ===Клик вне открывшегося списка.
document.addEventListener('click', (event) => {
    const clickSelect = event.target.id === 'class-select'
    const clickOption = event.target.classList.contains('option');
    console.log(clickSelect && clickOption)
    if (!clickSelect && !clickOption) {
        classList.classList.add('close');
        classField.classList.add('close');
    }
})
// Клик по элементам списка
classItems.forEach((element) =>{
    element.addEventListener('click', (event) => {
        classField.textContent = event.target.textContent
        event.target.classList.add('selected');
        selected.classList.remove('selected');
        selected = event.target;
    })
})
