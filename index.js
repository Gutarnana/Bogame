//  var product =[{
//     id: 1,
//     img:'https://www.littlekrakenboardgame.com/wp-content/uploads/2023/10/0859094005343_p0_v1_s1200x630-300x300.jpg',
//     Name:'Long Shot The Dice Game',
//     price: 1060,
//     description:'In Long Shot: The Dice Game, you and up to seven other players will strategize and push your luck as the action unfolds in a tense race of eight horses. During the game you buy horses, place bets, influence race movement, and utilize special abilities. The roll of the dice determines which horses move and the options available each turn, so be ready to adapt your plans. Once three horses cross the finish line, earnings are totaled. While there are many ways to earn money during a horse race, only the player that makes the most money will be declared the winner. Will you play it safe, or risk it big on a long shot?',
//     type:'family'
// },{
//     id:2,
//     img:'https://www.littlekrakenboardgame.com/wp-content/uploads/2023/10/g8-300x300.jpeg',
//     Name:'Quoridor',
//     price: 1250,
//     description:'Quoridor is an elegant and strategic board game designed for 2 to 4 players. The objective of the game is to be the first player to reach the opposite side of the board with your pawn. However, it s not as simple as it sounds Players must also employ clever blocking strategies to impede their opponents progress while finding a path to victory for themselves. The game is played on a grid-based board, and it combines elements of strategy and spatial reasoning. The basic rules of Quoridor involve players taking turns to either move their pawn one space in any direction (up, down, left, or right) or place a wooden fence on the board to block their opponents. Fences are placed vertically or horizontally, and they can be used to create barriers and force opponents to take longer routes. The challenge lies in balancing offense and defense, as you must decide when to move your pawn and when to place fences strategically. The first player to navigate their pawn to the opposite side of the board wins the game, but careful placement of fences and consideration of your opponents moves are key to success in Quoridor. The abstract strategy game Quoridor is surprisingly deep for its simple rules. The object of the game is to advance your pawn to the opposite edge of the board. On your turn you may either move your pawn or place a wall. You may hinder your opponent with wall placement, but not completely block him off. Meanwhile, he is trying to do the same to you. The first pawn to reach the opposite side wins.',
//     type:'family',
// },{
//     id:3,
//      img:'https://www.littlekrakenboardgame.com/wp-content/uploads/2023/05/6000205279155.jpeg',
//      Name:'Zombie Kittens',
//      price: 750,
//      description:'Zombie Kittens is still the highly strategic, kitty-powered version of Russian Roulette that you love, but it introduces a brand new deck of cards so that your game doesn’t end just because you blow up. Only living players can win the game, but dead players now get to keep the cards in their hands when they explode. They also get to play certain cards to torment the living players. And they can even come back from the dead to win the game. Zombie Kittens can be played by itself or can be combined with Exploding Kittens.',
//      type:'party',
// },{
//     id:4,
//      img:'https://www.littlekrakenboardgame.com/wp-content/uploads/2021/02/Balance-600x514.jpg',
//      Name:'Balance Beans',
//      price: 900,
//      description:'Balance Beans is a logic game and math game all in one. Set up the Red Beans according to the Challenge Card. Then carefully place the colorful Beans on the Seesaw to keep it from teetering. When you balance the Seesaw, you are actually balancing an equation! As the challenges get harder, you’ll rely less on trial and error – and more on math and reasoning skills. This bean-filled logic game is a fun way to introduce young learners to elementary algebra.',
//      type:'kids',
// },{
//     id:5,
//      img:'https://www.littlekrakenboardgame.com/wp-content/uploads/2021/05/tysg5q-300x300.jpeg',
//      Name:'7 Wonders',
//      price: 2400,
//      description:'You are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes, and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times. 7 Wonders lasts three ages. In each age, players receive seven cards from a particular deck, choose one of those cards, then pass the remainder to an adjacent player. Players reveal their cards simultaneously, paying resources if needed or collecting resources or interacting with other players in various ways. (Players have individual boards with special powers on which to organize their cards, and the boards are double-sided). Each player then chooses another card from the deck they were passed, and the process repeats until players have six cards in play from that age. After three ages, the game ends. In essence, 7 Wonders is a card development game. Some cards have immediate effects, while others provide bonuses or upgrades later in the game. Some cards provide discounts on future purchases. Some provide military strength to overpower your neighbors and others give nothing but victory points. Each card is played immediately after being drafted, so youll know which cards your neighbor is receiving and how her choices might affect what youve already built up. Cards are passed left-right-left over the three ages, so you need to keep an eye on the neighbors in both directions. Though the box of earlier editions is listed as being for 3–7 players, there is an official 2-player variant included in the instructions.',
//      type:'strategy',
// }]

var product;

$ (document).ready(()=>{

    $.ajax({
        metthod:'get',
        url:'./api/getallproduct.php',
        success: function(response){
            console.log(response)
            if(response.Respcode == 200) {

                product = response.Result;

                var html='';
                for (let i=0;i<product.length; i++) {
                    html+=`<div onclick="openproductdetail(${i})" class="products" ${product[i].type}>
                                <img src="./imgs/${product[i].img}" class="imgproduct" >   
                                    <p>${product[i].name}</p>
                                    <p>${numberWithCommas(product[i].price)} THB</p>
                            </div>`;
    }
    $('#productlist').html(html)
            }
        }, error: function(err){
            console.log(err)
        }
    })

    
})

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}


function searchsomething(elem) {
    // console.log(elem)
    var value = $('#'+elem.id).val()
    console.log(value)
    
    var html='';
    for (let i=0;i<product.length; i++) {
        if( product[i].name.includes(value)  ){
            html+=`<div onclick="openproductdetail(${i})" class="products" ${product[i].type}>
                    <img src="./imgs/${product[i].img}" class="imgproduct" >   
                        <p>${product[i].name}</p>
                        <p>${numberWithCommas(product[i].price)} บาท</p>
                </div>`;
        }
    }
        if(html==''){
            $("#productlist").html(`<p>notproduct</p>`)
        }
        else {
            $("#productlist").html(html);
        }
        }
    
        var productindex=0;
        function openproductdetail(index) {
            productindex = index; 
            console.log(productindex);
            $("#modaldesc").css('display','flex');
            $("#mdd-img").attr('src', './imgs/'+ product[index].img);
            $('#mdd-name').text(product[index].name);
            $('#mdd-price').text(numberWithCommas (product[index].price) +'THB');
            $('#mdd-desc').text(product[index].description);
        }

        function closemodal(){
            $('.modal').css('display','none')
        }

        var cart = [] ;
        function addtocart () {
            var pass = true;

            for (let i = 0; i < cart.length; i++) {
                if (productindex == cart[i].index) {
                        console.log('found product')
                        cart[i].count++;
                        pass = false;
                }
                
            }
                
            if(pass) {
                var obj = {
                    index: productindex,
                    id:product[productindex].id,
                    name: product[productindex].name,
                    price: product[productindex].price,
                    img: product[productindex].img,
                    count: 1
                };
                cart.push(obj)
            }

                console.log(cart)
            $("#cartcount").html('diplay','flex').text(cart.length)
            $('.modal').css('display','none')
            
        }

        

        function opencart(){
            $('#modalcart').css('display','flex')
            rendercart();
        }

        function rendercart (){
            if (cart.length > 0){
                var html='';
                for (let  i = 0; i < cart.length; i++) {
                    html +=`<div class="cartlint-items">
                                <img src="./imgs/${cart[i].img}" class="cart-img">
                                    <div class="cartlint-left">
                                            <p>${cart[i].name}</p>
                                            <p>${numberWithCommas(cart[i].price)} บาท</p> 
                                    <div class="cartlint-right">
                                            <p onclick="deinitems('-',${i})" class="btnc">-</p>
                                            <p id="countitems${i}" style="margin: 0 10px;">${cart[i].count}</p>
                                            <p onclick="deinitems('+',${i})" class="btnc">+</p>
                                    </div>
                            </div>`;
                }
                $("#mycart").html(html)

            }
            
            else {
                $("#mycart").html(`<p >not fount product</p>`)
            }

        }

        function deinitems (action,index) {
            if(action=='-') {
                if (cart[index].count>0){
                        cart[index].count--;
                        $("#countitems"+index).text(cart[index].count)
                }
                 
            }
            if (cart[index].count <= 0){
                    cart.splice(index,1)
                    console.log(cart)
                    rendercart();
                    $("#cartcount").css('diplay','flex').text(cart.length)
                }
            else if(action=='+') {
                cart[index].count++;
                $('#countitems'+index).text(cart[index].count)
            }
        }

        
        
        function buynow() {
            $.ajax({
                method: 'post',
                url: './api/buynow.php',
                data: {
                    product: cart
                }, success: function(response) {
                    console.log(response)
                    if(response.RespCode == 200) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Thank you',
                            html: ` <p> Amount : ${response.Amount.Amount}</p>
                                    <p> Shipping : ${response.Amount.Shipping}</p>
                                    <p> Vat : ${response.Amount.Vat}</p>
                                    <p> Netamount : ${response.Amount.Netamount}</p>
                                    `
                        }).then((res) => {
                            if(res.isConfirmed) {
                                cart = [];
                                closeModal();
                                $("#cartcount").css('display','none')
                                $('.modal').css('display','none')
                            }
                        })
                    }
                    else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Something is went wrong!'
                        })
                    }
                }, error: function(err) {
                    console.log(err)
                }
            })
        }


       
       
        
        

        

       
        