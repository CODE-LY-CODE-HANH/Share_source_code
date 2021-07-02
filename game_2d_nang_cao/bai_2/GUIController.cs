using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GUIController : MonoBehaviour
{
    // Ánh xạ nhân vật bằng cách kéo thả bên giao diện unity
    public GameObject player;
    // ánh xạ style
    public GUISkin skin;

    public GUIStyle btnStyle;

    void OnGUI()
    {
        // gán style đã ánh xạ cho toàn bộ Giao Diện (GUI)
        GUI.skin = skin;

        // Tạo một background box
        GUI.Box(new Rect(10, 10, 850, 350), "Loader Menu");

        // Tạo button đầu tiên, khi người cùng click sẽ load một scene
        if (GUI.Button(new Rect(20, 40, 80, 20), "fire" , btnStyle ))
        {
            // ánh xạ nhân vật theo tên
            //GameObject player =  GameObject.Find("Player");
            // ánh xạ nhân vật theo TAG
            //GameObject player = GameObject.FindWithTag("Player");

            if ( player != null )
            {
                PlayerController playerController = player.GetComponent<PlayerController>();
                playerController.fire();
            }
        }
        // Tạo button thứ 2
        if (GUI.Button(new Rect(20, 70, 80, 20), "exit" ))
        {
            
        }
    }

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
