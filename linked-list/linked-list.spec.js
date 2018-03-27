import LinkedList from './linked-list';
describe('myLinkedList', () => {
  test('it creates a empty list', () => {
    expect(() => new LinkedList()).not.toThrow();
  })
  test('it has a first and last references', () => {
    expect(new LinkedList()).toHaveProperty('first');
    expect(new LinkedList()).toHaveProperty('last');
  })
  test('it should have a count reference', () => {
    expect(new LinkedList()).toHaveProperty('_count');
  })
  test('it should add elements to the list', () => {
    let list = new LinkedList();
    list.push(15)
    expect(list._count).toEqual(1);
  })
  test('it should be able to add more than one item to the list', () => {
    let list = new LinkedList();
    list.push(15)
    list.push(10)
    expect(list._count).toEqual(2);
  })
  test('it should be able to pop items from the list', () => {
    let list = new LinkedList();
    list.push(15)
    list.push(10)
    let popped = list.pop();
    expect(popped).toEqual(10);
    list.print();
    expect(list._count).toEqual(1);
  })
})


describe('LinkedList', () => {
  test('add/extract elements to the end of the list with push/pop', () => {
    const list = new LinkedList();
    list.push(10);
    list.push(20);
    expect(list.pop()).toBe(20);
    expect(list.pop()).toBe(10);
  });
  test('extract elements from the beginning of the list with shift', () => {
    const list = new LinkedList();
    list.push(10);
    list.push(20);
    expect(list.shift()).toBe(10);
    expect(list.shift()).toBe(20);
  });
  test('add/extract elements from the beginning of the list with unshift/shift', () => {
    const list = new LinkedList();
    list.unshift(10);
    list.unshift(20);
    list.print();
    expect(list.shift()).toBe(20);
    expect(list.shift()).toBe(10);
  });
  test('unshift/pop', () => {
    const list = new LinkedList();
    list.unshift(10);
    list.unshift(20);
    expect(list.pop()).toBe(10);
    expect(list.pop()).toBe(20);
  });
  test('example', () => {
    const list = new LinkedList();
    list.push(10);
    list.push(20);
    expect(list.pop()).toBe(20);
    list.push(30);
    expect(list.shift()).toBe(10);
    list.unshift(40);
    list.push(50);
    expect(list.shift()).toBe(40);
    expect(list.pop()).toBe(50);
    expect(list.shift()).toBe(30);
  });
  test('can count its elements', () => {
    const list = new LinkedList();
    expect(list.count()).toBe(0);
    list.push(10);
    expect(list.count()).toBe(1);
    list.push(20);
    expect(list.count()).toBe(2);
  });
  test('sets head/tail after popping last element', () => {
    const list = new LinkedList();
    list.push(10);
    list.pop();
    list.unshift(20);
    expect(list.count()).toBe(1);
    expect(list.pop()).toBe(20);
  });
  test('sets head/tail after shifting last element', () => {
    const list = new LinkedList();
    list.unshift(10);
    list.shift();
    list.push(20);
    expect(list.count()).toBe(1);
    expect(list.shift()).toBe(20);
  });
  test('deletes the element with the specified value from the list', () => {
    const list = new LinkedList();
    list.push(10);
    list.push(20);
    list.push(30);
    list.delete(20);
    list.print();
    expect(list.count()).toBe(2);
    expect(list.pop()).toBe(30);
    expect(list.shift()).toBe(10);
  });
  test('deletes the only element', () => {
    const list = new LinkedList();
    list.push(10);
    list.delete(10);
    expect(list.count()).toBe(0);
  });
  test('delete does not modify the list if the element is not found', () => {
    const list = new LinkedList();
    list.push(10);
    list.delete(20);
    expect(list.count()).toBe(1);
  });
});
