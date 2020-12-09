/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
      const ul = document.createElement('UL');
      for (item in friends) {
        let li = document.createElement('LI');
        li.innerText = `${friends[item].firstName} ${friends[item].lastName}`
        ul.appendChild(li)
      }
      return ul

    }