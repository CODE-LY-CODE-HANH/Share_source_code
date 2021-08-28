using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GunController : MonoBehaviour
{
    public GameObject firePoint;

    public LayerMask layer;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKey(KeyCode.Mouse0))
        {
            // Lấy ra vị trí điểm bắt đầu ( vị trí bắn ra đạn )
            Transform firePointPosition = firePoint.transform;
            //Transform firePointPosition = gameObject.transform;

            Vector2 fireX = new Vector2(firePointPosition.position.x, firePointPosition.position.y);

            // Lấy ra vị trí chuột đã click
            Vector2 mousePosition =
                new Vector2(Camera.main.ScreenToViewportPoint(Input.mousePosition).x,
                            Camera.main.ScreenToViewportPoint(Input.mousePosition).y
                            );
            /*
             * 1 . (fireX) vị trí bắt đầu
             * 2 . (mousePosition - fireX) *20 góc di chuyển
             * 3. 20 độ dài 
             * 4. layer
             */
            RaycastHit2D hit = Physics2D.Raycast(fireX, (mousePosition - fireX), 20, layer);
            // Vẽ 1 đường thẳng theo Raycast
            Debug.DrawLine(fireX, (mousePosition - fireX) , Color.green);

            if (hit.collider != null)
            {
                if (hit.collider.tag == "Player")
                {
                    Debug.Log(hit.collider.tag);
                    //Destroy(hit.collider.gameObject);
                    hit.collider.gameObject.transform.position = transform.position;
                }
            }
        }
    }
}
