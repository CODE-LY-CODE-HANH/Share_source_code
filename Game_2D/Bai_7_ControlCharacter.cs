using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
/*
Các bạn chỉ nên COPY code cần dùng thôi nhé
--- Các bạn mà tải file về hoặc COPY tất cả thì khi chạy sẽ lỗi nha
*/
public class ControlCharacter : MonoBehaviour
{
    // Start is called before the first frame update
    // Khai báo các biến sử dụng
    public static bool isGameOver = false; //Trạng Thái kết thúc Game
    public float jumpheight, speed; // độ cao khi nhảy  , tốc độ chạy
    private Animator player; // Nhân vật

    int score = 0; // Điểm của người chơi
    public Text txtScore;
    // Điều khiển hiệu ứng
    public GameObject particleSystem;
    public GameObject particleSystem_2;

    void Start()
    {
        // Ánh xạ Component
        player = GetComponent<Animator>();
        Time.timeScale = 1; //tỉ lệ với thời gian thực
        isGameOver = false;
        // ánh xạ đến txtScore GUI
        txtScore = GameObject.Find("txtScore").GetComponent<Text>();
    }

    void OnCollisionEnter2D(Collision2D collision) // Xử lí va chạm
    {
        if (collision.gameObject.tag == "tien") // Nếu nhân vật chạm vào đồng tiền
        {
            score += 1; // score = score + 1
            Destroy(collision.gameObject); // xóa hay còn gọi là hủy đối tượng ( xóa tiền )
            txtScore.text = "Score :  " + score.ToString(); // Cập nhật điểm cho người choi
            // Xử lý hiệu ứng
            GameObject g = Instantiate(particleSystem, gameObject.transform.position, Quaternion.identity); // tạo hiệu ứng
            //GameObject g = Instantiate(particleSystem);
            Destroy(g, 2);
        }

        if (collision.gameObject.tag == "CNV1") // Nếu nhân vật chạm vào chướng ngại vật
        {
            score -= 1; // score = score - 1
            Destroy(collision.gameObject); // xóa hay còn gọi là hủy đối tượng ( xóa CNV )
            txtScore.text = "Score :  " + score.ToString(); // Cập nhật điểm cho người chơi
            if ( score <= 0 )
            {
                Application.LoadLevel("MenuGame");
            }
            // Xử lý hiệu ứng
            GameObject g = Instantiate(particleSystem_2, gameObject.transform.position, Quaternion.identity); // tạo hiệu ứng
            //GameObject g = Instantiate(particleSystem);
            Destroy(g, 2);
        }
    }

    // Update is called once per frame
    void Update()
    {
        if (! isGameOver) //Nếu game chưa kết thúc
        {
            if ( Input.GetKey(KeyCode.LeftArrow) ) // nếu nhấn phím mũi tên trái
            {
                // Thay đổi trạng thái của nhân vật
                player.SetBool("isIdle" , false);
                player.SetBool("isRunning", true);
                // di chuyển nhân vật
                gameObject.transform.Translate(Vector3.left * speed * Time.deltaTime  );
                //Quay đầu nhân vật
                if ( gameObject.transform.localScale.x > 0)
                {
                    gameObject.transform.localScale = new Vector3(
                        gameObject.transform.localScale.x * -1,
                        gameObject.transform.localScale.y,
                        gameObject.transform.localScale.z
                        );
                }
            }
            else if (Input.GetKey(KeyCode.RightArrow) ) // nếu nhấn phím mũi tên phải
            {
                // Thay đổi trạng thái của nhân vật
                player.SetBool("isIdle", false);
                player.SetBool("isRunning", true);
                // di chuyển nhân vật
                gameObject.transform.Translate(Vector3.right * speed * Time.deltaTime);
                //Quay đầu nhân vật
                if (gameObject.transform.localScale.x < 0)
                {
                    gameObject.transform.localScale = new Vector3(
                        gameObject.transform.localScale.x * -1,
                        gameObject.transform.localScale.y,
                        gameObject.transform.localScale.z
                        );
                }
            }
            else if (Input.GetKey(KeyCode.UpArrow) ) //Nếu nhấn phím Mũi tên lên thì nhân vật sẽ  nhảy
            {
                gameObject.GetComponent<Rigidbody2D>().velocity = new Vector2(
                    gameObject.GetComponent<Rigidbody2D>().velocity.x,
                    jumpheight
                    );
            }
            else // Nếu ko nhấn gì thì nhân vật đứng im
            {
                // Thay đổi trạng thái của nhân vật
                player.SetBool("isIdle", true);
                player.SetBool("isRunning", false);
            }
        }
    }
}
